import Container from "@/components/layout/Container";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutContactSection() {
  return (
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
          />
        </div>
        <div className="reveal-up reveal-delay-1 mt-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
