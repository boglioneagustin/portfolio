import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqItemsEs } from "@/lib/data-es";

export default function FaqSectionEs() {
  return (
    <section className="pt-24 sm:pt-28">
      <Container>
        <div className="reveal-up">
          <SectionTitle tag="FAQ" title="Antes de preguntar" />
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[760px] flex-col gap-4">
          {faqItemsEs.map((item, index) => (
            <button
              key={item.question}
              type="button"
              className={`reveal-up ${
                index === 0
                  ? ""
                  : index === 1
                    ? "reveal-delay-1"
                    : index === 2
                      ? "reveal-delay-2"
                      : "reveal-delay-3"
              } button-soft flex h-[56px] items-center justify-between rounded-full border border-white/50 bg-[#f5f5f3] px-5 text-left text-[18px] font-medium leading-[1.3] text-[#2f2f34] shadow-[0_4px_14px_rgba(0,0,0,0.02)]`}
            >
              <span>{item.question}</span>
              <span className="text-[34px] font-normal leading-none text-[#ef5a31]">+</span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
