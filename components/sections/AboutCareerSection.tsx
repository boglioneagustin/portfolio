import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutCareerItems } from "@/lib/data";

export default function AboutCareerSection() {
  return (
    <section className="pt-20 sm:pt-24">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Work Experience"
            title={
              <>
                Career history
                <br />
                &amp; Roles
              </>
            }
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-4">
          {aboutCareerItems.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              className={`reveal-up ${
                index === 0
                  ? ""
                  : index === 1
                    ? "reveal-delay-1"
                    : index === 2
                      ? "reveal-delay-2"
                      : "reveal-delay-3"
              } rounded-[28px] bg-[#f8f8f7] px-5 py-6 shadow-[0_8px_20px_rgba(0,0,0,0.02)] sm:px-8 sm:py-7`}
            >
              <div className="grid gap-4 md:grid-cols-[1.15fr_1.15fr_0.7fr] md:items-center md:gap-6">
                <h3 className="text-[18px] font-medium leading-[1.2] text-[#2b2d33] sm:text-[20px] md:text-[22px]">{item.role}</h3>

                <div className="flex items-center gap-2.5 text-[18px] font-normal leading-[1.25] text-[#7b7f88] sm:text-[19px] md:text-[20px]">
                  <span className="relative inline-flex h-7 w-7 shrink-0 overflow-hidden rounded-[8px] border border-white/85 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <Image src={item.logoSrc} alt={item.logoAlt ?? item.company} fill sizes="28px" className="object-contain p-[2px]" />
                  </span>
                  <span className="break-words">{item.company}</span>
                </div>

                <p className="text-[18px] font-normal leading-[1.2] text-[#4e545f] sm:text-[19px] md:text-[20px]">{item.period}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
