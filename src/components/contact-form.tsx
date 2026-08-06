"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";

type FormStatus = "idle" | "submitting" | "error";

type ContactFormProps = {
  defaultService?: string;
  kicker?: string;
  heading?: string;
  intro?: string;
};

export function ContactForm({
  defaultService = "General enquiry",
  kicker = "Project enquiry",
  heading = "Start with the essentials.",
  intro = "A little context helps us make the first conversation useful.",
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [messageLength, setMessageLength] = useState(0);

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
      setMessageLength(0);
      router.push("/thank-you");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unexpected form error.");
      setStatus("error");
      return;
    }

    setStatus("idle");
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onChangeCapture={() => {
        if (status === "error") {
          setStatus("idle");
          setError("");
        }
      }}
      aria-busy={status === "submitting"}
    >
      <div className="contact-form-header">
        <div>
          <span className="contact-form-kicker">{kicker}</span>
          <h3>{heading}</h3>
          <p>{intro}</p>
        </div>
        <span className="contact-form-badge">
          <Icon name="check" width={15} height={15} />
          Protected form
        </span>
      </div>

      <fieldset className="form-group">
        <legend>
          <span>01</span>
          <span>
            <strong>About you</strong>
            <small>Who should we respond to?</small>
          </span>
        </legend>
        <div className="form-grid">
          <label>
            <span>Name <small>Required</small></span>
            <input name="name" autoComplete="name" placeholder="Your full name" required minLength={2} maxLength={80} />
          </label>
          <label>
            <span>Work email <small>Required</small></span>
            <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={160} />
          </label>
          <label>
            <span>Company <small>Required</small></span>
            <input name="company" autoComplete="organization" placeholder="Company name" required minLength={2} maxLength={120} />
          </label>
          <label>
            <span>Phone <small>Optional</small></span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="Country code + number" maxLength={40} />
          </label>
        </div>
      </fieldset>

      <fieldset className="form-group">
        <legend>
          <span>02</span>
          <span>
            <strong>Your growth brief</strong>
            <small>What would make this conversation valuable?</small>
          </span>
        </legend>

        <label>
          <span>What would you like to discuss? <small>Required</small></span>
          <select name="service" defaultValue={defaultService} required>
            <option>Appointment setting</option>
            <option>B2B lead generation</option>
            <option>Account-based marketing</option>
            <option>Pilot programme</option>
            <option>General enquiry</option>
          </select>
        </label>

        <label>
          <span>Tell us about the market or pipeline challenge <small>Required</small></span>
          <textarea
            name="message"
            rows={6}
            placeholder="For example: what you sell, who you want to reach, and where your current process is getting stuck."
            required
            minLength={20}
            maxLength={2000}
            aria-describedby="message-guidance"
            onChange={(event) => setMessageLength(event.currentTarget.value.length)}
          />
          <span className="form-field-meta" id="message-guidance">
            <small>20 character minimum</small>
            <small>{messageLength} / 2000</small>
          </span>
        </label>
      </fieldset>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-consent-panel">
        <label className="consent-field">
          <input name="consent" type="checkbox" required />
          <span>I agree that Growth Orbits may use this information to respond to my enquiry.</span>
        </label>
      </div>

      {error ? (
        <p className="form-error" role="alert">
          <span aria-hidden="true">!</span>
          {error}
        </p>
      ) : null}

      <div className="form-submit-row">
        <button className="button button-primary submit-button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? <span className="form-spinner" aria-hidden="true" /> : null}
          <span>{status === "submitting" ? "Sending enquiry…" : "Send enquiry"}</span>
          {status !== "submitting" ? <Icon name="arrow" width={18} height={18} /> : null}
        </button>
        <p className="form-privacy-note">
          <Icon name="check" width={15} height={15} />
          Your details are used only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
