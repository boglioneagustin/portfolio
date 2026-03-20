import Container from "@/components/layout/Container";
import WorkCard from "@/components/ui/WorkCard";
import { allWorks } from "@/lib/data";

export default function AllWorksSection() {
  return (
    <section className="pt-8 sm:pt-12">
      <Container>
        <div className="reveal-up mx-auto max-w-[760px] text-center">
          <h1 className="section-heading text-[52px] leading-[1.05] sm:text-[76px] lg:text-[84px]">
            Projects &amp;
            <br />
            case studies
          </h1>
          <p className="section-description mx-auto mt-6 max-w-[520px] text-[18px] leading-[1.35] sm:mt-7 sm:text-[24px] sm:leading-[1.3]">
            Complete view of my work across different projects &amp; disciplines.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2">
          {allWorks.map((work, index) => (
            <div
              key={work.title}
              className={
                index === 0
                  ? "reveal-up"
                  : index === 1
                    ? "reveal-up reveal-delay-1"
                    : index === 2
                      ? "reveal-up reveal-delay-2"
                      : index === 3
                        ? "reveal-up reveal-delay-3"
                        : "reveal-up"
              }
            >
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
