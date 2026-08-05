"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";

type FormStatus = "idle" | "submitting" | "error";

export function ContactForm({ defaultService = "General enquiry" }: { defaultService?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? "General enquiry"),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not submit the form.");
      }

      form.reset();
      router.push("/thank-you");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unexpected form error.");
      setStatus("error");
      return;
    }

    setStatus("idle");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required minLength={2} maxLength={80} />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
        <label>
          <span>Company</span>
          <input name="company" autoComplete="organization" required minLength={2} maxLength={120} />
        </label>
        <label>
          <span>Phone <small>Optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
      </div>

      <label>
        <span>What would you like to discuss?</span>
        <select name="service" defaultValue={defaultService}>
          <option>Appointment setting</option>
          <option>B2B lead generation</option>
          <option>Account-based marketing</option>
          <option>Pilot programme</option>
          <option>General enquiry</option>
        </select>
      </label>

      <label>
        <span>Tell us about the market or pipeline challenge</span>
        <textarea name="message" rows={6} required minLength={20} maxLength={2000} />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-field">
        <input name="consent" type="checkbox" required />
        <span>I agree that Growth Orbits may use this information to respond to my enquiry.</span>
      </label>

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      <button className="button button-primary submit-button" type="submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Sending…" : "Send enquiry"}</span>
        <Icon name="arrow" width={18} height={18} />
      </button>
      <p className="form-note">Example contact details and delivery configuration must be replaced before launch.</p>
    </form>
  );
}
