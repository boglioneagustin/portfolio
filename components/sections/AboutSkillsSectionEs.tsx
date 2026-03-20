import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillSurprisePanel from "@/components/ui/SkillSurprisePanel";
import { aboutSkillItemsEs } from "@/lib/data-es";

const toolsBySkill = {
  workflow: ["n8n", "zapier", "make"],
  code: ["laravel", "react", "html", "css", "javascript"],
  ai: ["python", "chatgpt", "gemini"],
  integration: ["pipedrive", "salesforce"],
} as const;

export default function AboutSkillsSectionEs() {
  return (
    <section className="pt-24 sm:pt-28">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Habilidades"
            title={
              <>
                Habilidades tecnicas
                <br />
                y creativas
              </>
            }
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutSkillItemsEs.map((item, index) => {
            return (
              <article
                key={item.title}
                className={`reveal-up ${
                  index === 0
                    ? ""
                    : index === 1
                      ? "reveal-delay-1"
                      : index === 2
                        ? "reveal-delay-2"
                        : "reveal-delay-3"
                } skill-surprise-card rounded-[20px] bg-[#f8f8f7] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.02)]`}
              >
                <SkillSurprisePanel
                  icon={item.icon}
                  tools={toolsBySkill[item.icon]}
                  ctaLabel="Get in touch"
                  contactHref="/es/contact"
                />
                <div className="mt-4 px-1 pb-1">
                  <p className="text-[20px] font-medium leading-[1.2] text-[#2b2d33]">{item.title}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
