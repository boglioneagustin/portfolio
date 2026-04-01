import Container from "@/components/layout/Container";
import FaqSection from "@/components/sections/FaqSection";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-10">
      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="reveal-up">
            <SectionTitle
              tag="Contact"
              title={
                <>
                  Have a project
                  <br />
                  in mind?
                </>
              }
              containerClassName="max-w-[760px]"
            />
          </div>
          <div className="reveal-up reveal-delay-1 mt-10 sm:mt-12">
            <ContactForm redirectTo="/thank-you" />
          </div>
        </Container>
      </section>

      <FaqSection />
    </main>
  );
}
