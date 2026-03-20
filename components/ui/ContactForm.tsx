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
};

export default function ContactForm({
  labels,
  placeholders,
  submitLabel = "Submit",
  helperText = "**We will reach out to you within 24hrs**",
}: ContactFormProps) {
  const nameLabel = labels?.name ?? "Name";
  const emailLabel = labels?.email ?? "Email";
  const projectLabel = labels?.project ?? "Project Information";
  const namePlaceholder = placeholders?.name ?? "Jane Smith";
  const emailPlaceholder = placeholders?.email ?? "jane@brand.com";
  const projectPlaceholder = placeholders?.project ?? "Tell us about your next project";

  return (
    <form className="mx-auto w-full max-w-[760px] rounded-[28px] bg-white px-6 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.04)] sm:px-10 sm:py-10">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#3f3f3f]">
            {nameLabel}
          </label>
          <input
            id="name"
            name="name"
            placeholder={namePlaceholder}
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
            className="field-input w-full rounded-2xl border border-[#ececec] bg-[#f7f7f7] px-4 py-3 text-[17px] outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn-primary mt-7 w-full rounded-full px-8 py-4 text-lg font-semibold text-white"
      >
        {submitLabel}
      </button>
      <p className="mt-3 text-center text-sm text-[#8b8b8b]">{helperText}</p>
    </form>
  );
}
