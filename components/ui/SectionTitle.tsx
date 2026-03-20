import type { ReactNode } from "react";

type SectionTitleProps = {
  tag?: string;
  title: ReactNode;
  description?: string;
  containerClassName?: string;
  tagClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionTitle({
  tag,
  title,
  description,
  containerClassName,
  tagClassName,
  titleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div className={`mx-auto max-w-[760px] text-center ${containerClassName ?? ""}`}>
      {tag ? (
        <span className={`section-pill reveal-text mb-5 inline-block rounded-full bg-[#f8f8f7] px-5 py-2 ${tagClassName ?? ""}`}>
          {tag}
        </span>
      ) : null}
      <h2 className={`section-heading reveal-text reveal-delay-1 ${titleClassName ?? ""}`}>{title}</h2>
      {description ? (
        <p className={`section-description reveal-text reveal-delay-2 mt-6 ${descriptionClassName ?? ""}`}>{description}</p>
      ) : null}
    </div>
  );
}
