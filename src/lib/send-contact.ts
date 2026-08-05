import "server-only";

import type { ContactInput } from "@/lib/contact";
import { toPlainTextMessage } from "@/lib/contact";

export async function sendContactNotification(input: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV === "development") {
      console.info("[Growth Orbits contact demo]", toPlainTextMessage(input));
      return;
    }

    throw new Error("Contact delivery is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `Growth Orbits enquiry — ${input.company}`,
      text: toPlainTextMessage(input),
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    const requestId = response.headers.get("x-request-id") ?? "unknown";
    throw new Error(`Contact delivery failed (${response.status}, request ${requestId}).`);
  }
}
