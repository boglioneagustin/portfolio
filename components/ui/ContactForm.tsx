"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  labels?: {
    name?: string;
    email?: string;
    project?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    project?: string;
  };
  submitLabel?: string;
  helperText?: string;
  redirectTo?: string;
  messages?: {
    sending?: string;
    success?: string;
    error?: string;
    invalid?: string;
  };
};

export default function ContactForm({
  labels,
  placeholders,
  submitLabel = "Submit",
  helperText = "**We will reach out to you within 24hrs**",
  redirectTo = "/thank-you",
  messages,
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const nameLabel = labels?.name ?? "Name";
  const emailLabel = labels?.email ?? "Email";
  const projectLabel = labels?.project ?? "Project Information";
  const namePlaceholder = placeholders?.name ?? "Jane Smith";
  const emailPlaceholder = placeholders?.email ?? "jane@brand.com";
  const projectPlaceholder = placeholders?.project ?? "Tell us about your next project";
  const sendingText = messages?.sending ?? "Sending...";
  const successText = messages?.success ?? "Message sent. I will get back to you soon.";
  const errorText = messages?.error ?? "There was an error sending your message. Please try again.";
  const invalidText = messages?.invalid ?? "Please complete all fields with a valid email.";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (website) return;

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !email || !project || !emailOk) {
      setStatus("error");
      setFeedback(invalidText);
      return;
    }

    try {
      setStatus("sending");
      setFeedback("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      setFeedback(successText);
      form.reset();

      if (redirectTo) {
        window.setTimeout(() => {
          router.push(redirectTo);
        }, 350);
      }
    } catch (error) {
      setStatus("error");
      const message = error instanceof Error ? error.message : "";
      setFeedback(message || errorText);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-[760px] rounded-[28px] bg-white px-6 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.04)] sm:px-10 sm:py-10"
    >
      <div className="space-y-6">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#3f3f3f]">
            {nameLabel}
          </label>
          <input
            id="name"
            name="name"
            placeholder={namePlaceholder}
            required
            className="field-input h-14 w-full rounded-2xl border border-[#ececec] bg-[#f7f7f7] px-4 text-[17px] outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#3f3f3f]">
            {emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            required
            className="field-input h-14 w-full rounded-2xl border border-[#ececec] bg-[#f7f7f7] px-4 text-[17px] outline-none"
          />
        </div>
        <div>
          <label htmlFor="project" className="mb-2 block text-sm font-medium text-[#3f3f3f]">
            {projectLabel}
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            placeholder={projectPlaceholder}
            required
            className="field-input w-full rounded-2xl border border-[#ececec] bg-[#f7f7f7] px-4 py-3 text-[17px] outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-7 w-full rounded-full px-8 py-4 text-lg font-semibold text-white"
      >
        {status === "sending" ? sendingText : submitLabel}
      </button>
      <p className="mt-3 text-center text-sm text-[#8b8b8b]">{helperText}</p>
      {feedback ? (
        <p className={`mt-3 text-center text-sm ${status === "success" ? "text-[#2f7d32]" : "text-[#c3412b]"}`}>{feedback}</p>
      ) : null}
    </form>
  );
}
