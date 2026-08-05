import { describe, expect, it } from "vitest";
import { contactSchema, toPlainTextMessage } from "@/lib/contact";

const validSubmission = {
  name: "Avery Stone",
  email: "avery@example.com",
  company: "Northstar Labs",
  phone: "",
  service: "Appointment setting" as const,
  message: "We want to validate outbound demand in a new market.",
  consent: true as const,
  website: "",
};

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    expect(contactSchema.safeParse(validSubmission).success).toBe(true);
  });

  it("rejects honeypot submissions", () => {
    expect(contactSchema.safeParse({ ...validSubmission, website: "spam" }).success).toBe(false);
  });

  it("creates plain text without HTML rendering", () => {
    const output = toPlainTextMessage({ ...validSubmission, message: "<script>alert(1)</script> legitimate context" });
    expect(output).toContain("<script>alert(1)</script>");
  });
});
