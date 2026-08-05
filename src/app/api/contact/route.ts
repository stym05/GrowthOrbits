import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactNotification } from "@/lib/send-contact";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_384;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");

  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ ok: false, message: "Invalid request origin." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.startsWith("application/json")) {
    return NextResponse.json({ ok: false, message: "Unsupported content type." }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: "Request is too large." }, { status: 413 });
  }

  const ip = getClientIp(request);
  const rateLimit = await checkRateLimit(ip);

  if (!rateLimit.success) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, Math.ceil((rateLimit.reset - Date.now()) / 1000))),
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, message: "Request is too large." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message || "Check the submitted fields.";
    return NextResponse.json({ ok: false, message }, { status: 422 });
  }

  try {
    await sendContactNotification(parsed.data);
  } catch (error) {
    console.error("Contact delivery error", error);
    return NextResponse.json(
      { ok: false, message: "The message could not be delivered. Please try again later." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      },
    },
  );
}
