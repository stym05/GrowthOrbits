import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const localStore = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

const hasRedis = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const distributedLimiter = hasRedis
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(LIMIT, "10 m"),
      analytics: false,
      prefix: "growth-orbits:contact",
    })
  : null;

export async function checkRateLimit(identifier: string): Promise<{
  success: boolean;
  remaining: number;
  reset: number;
}> {
  if (distributedLimiter) {
    const result = await distributedLimiter.limit(identifier);
    return {
      success: result.success,
      remaining: result.remaining,
      reset: result.reset,
    };
  }

  const now = Date.now();
  const current = localStore.get(identifier);

  if (!current || current.resetAt <= now) {
    const resetAt = now + WINDOW_MS;
    localStore.set(identifier, { count: 1, resetAt });
    return { success: true, remaining: LIMIT - 1, reset: resetAt };
  }

  current.count += 1;
  localStore.set(identifier, current);

  // Prevent unbounded growth in long-running local processes.
  if (localStore.size > 5000) {
    for (const [key, entry] of localStore) {
      if (entry.resetAt <= now) localStore.delete(key);
    }
  }

  return {
    success: current.count <= LIMIT,
    remaining: Math.max(0, LIMIT - current.count),
    reset: current.resetAt,
  };
}
