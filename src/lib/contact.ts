import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email: z.string().trim().email("Enter a valid work email.").max(160),
  company: z.string().trim().min(2, "Enter your company name.").max(120),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.enum([
    "Appointment setting",
    "B2B lead generation",
    "Account-based marketing",
    "Pilot programme",
    "General enquiry",
  ]),
  message: z.string().trim().min(20, "Add a little more context.").max(2000),
  consent: z.literal(true, { error: "Consent is required." }),
  website: z.string().max(0, "Invalid submission.").optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function toPlainTextMessage(input: ContactInput): string {
  return [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company}`,
    `Phone: ${input.phone || "Not provided"}`,
    `Service: ${input.service}`,
    "",
    "Message:",
    input.message,
  ].join("\n");
}
