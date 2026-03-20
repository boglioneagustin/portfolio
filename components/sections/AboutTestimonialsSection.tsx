import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutTestimonials } from "@/lib/data";

export default function AboutTestimonialsSection() {
  return (
    <section className="pt-24 sm:pt-28">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Testimonials"
            title={
              <>
                Good work
                <br />
                gets noticed
              </>
            }
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 lg:grid-cols-3">
          {aboutTestimonials.map((item, index) => (
            <article
              key={`${item.rating}-${index}`}
              className={`reveal-up ${
                index === 0 ? "" : index === 1 ? "reveal-delay-1" : "reveal-delay-2"
              } rounded-[24px] bg-[#f8f8f7] px-6 py-6 shadow-[0_8px_20px_rgba(0,0,0,0.02)]`}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="placeholder-panel h-[84px] w-[84px] rounded-[8px]" />
                <p className="flex items-center gap-1.5 text-[18px] font-medium text-[#2f3138]">
                  <span className="text-[#ef542d]">★</span>
                  {item.rating}
                </p>
              </div>
              <p className="text-[18px] font-normal leading-[1.35] text-[#343841]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
