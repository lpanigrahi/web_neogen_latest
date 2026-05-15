"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Valid email required"),
  company: z.string().min(1, "Company is required").min(2, "Company name is required"),
  role: z.enum(["ceo", "cto-cio", "cfo", "ciso", "cdo", "coo", "cro-cmo", "other"]),
  intent: z.enum(["briefing", "demo", "partner", "press", "security", "other"]),
  message: z.string().optional(),
  // Honeypot field — must remain empty
  website: z.string().max(0, "").optional(),
});

type FormData = z.infer<typeof schema>;

type SubmitState = "idle" | "submitting" | "success" | "error";

const roleOptions: { value: FormData["role"]; label: string }[] = [
  { value: "ceo", label: "CEO / President" },
  { value: "cto-cio", label: "CTO / CIO" },
  { value: "cfo", label: "CFO" },
  { value: "ciso", label: "CISO" },
  { value: "cdo", label: "CDO / Chief Data Officer" },
  { value: "coo", label: "COO" },
  { value: "cro-cmo", label: "CRO / CMO" },
  { value: "other", label: "Other" },
];

const intentOptions: { value: FormData["intent"]; label: string }[] = [
  { value: "briefing", label: "Executive briefing" },
  { value: "demo", label: "Product demo" },
  { value: "partner", label: "Partnership inquiry" },
  { value: "press", label: "Press / media" },
  { value: "security", label: "Security disclosure" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    // Honeypot check — if website is filled, silently drop
    if (data.website) {
      setSubmitState("success");
      return;
    }

    setSubmitState("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitState("success");
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-aurora-1/10 border border-aurora-1/30 mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-aurora-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">Thank you.</h3>
        <p className="text-text-secondary text-sm">
          We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — visually hidden */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            Full name <span className="text-aurora-1" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors ${
              errors.name ? "border-red-500/60" : "border-border-soft"
            }`}
            placeholder="Jane Smith"
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            Work email <span className="text-aurora-1" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors ${
              errors.email ? "border-red-500/60" : "border-border-soft"
            }`}
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
            Company <span className="text-aurora-1" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            aria-required="true"
            aria-describedby={errors.company ? "company-error" : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors ${
              errors.company ? "border-red-500/60" : "border-border-soft"
            }`}
            placeholder="Acme Corp"
            {...register("company")}
          />
          {errors.company && (
            <p id="company-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-1.5">
            Your role <span className="text-aurora-1" aria-hidden="true">*</span>
          </label>
          <select
            id="role"
            aria-required="true"
            aria-describedby={errors.role ? "role-error" : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors ${
              errors.role ? "border-red-500/60" : "border-border-soft"
            }`}
            {...register("role")}
            defaultValue=""
          >
            <option value="" disabled>
              Select your role
            </option>
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.role && (
            <p id="role-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.role.message}
            </p>
          )}
        </div>
      </div>

      {/* Intent */}
      <div>
        <label htmlFor="intent" className="block text-sm font-medium text-text-primary mb-1.5">
          How can we help? <span className="text-aurora-1" aria-hidden="true">*</span>
        </label>
        <select
          id="intent"
          aria-required="true"
          aria-describedby={errors.intent ? "intent-error" : undefined}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors ${
            errors.intent ? "border-red-500/60" : "border-border-soft"
          }`}
          {...register("intent")}
          defaultValue=""
        >
          <option value="" disabled>
            Select the purpose of your inquiry
          </option>
          {intentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.intent && (
          <p id="intent-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.intent.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message{" "}
          <span className="text-text-muted text-xs font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          aria-describedby="message-hint"
          className="w-full rounded-lg border border-border-soft px-4 py-2.5 text-sm bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-aurora-1/50 transition-colors resize-y"
          placeholder="Tell us about your use case, stack, or specific questions…"
          {...register("message")}
        />
        <p id="message-hint" className="mt-1 text-xs text-text-muted">
          Describing your current stack and use case helps us tailor the briefing.
        </p>
      </div>

      {submitState === "error" && (
        <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitState === "submitting"}
        className="w-full sm:w-auto"
      >
        {submitState === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
