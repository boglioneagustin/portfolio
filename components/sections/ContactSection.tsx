import Container from "@/components/layout/Container";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 sm:pt-28">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Contact"
            title="Have a project in mind?"
            description="Share a few details and I will get back to you with a focused approach."
          />
        </div>
        <div className="reveal-up reveal-delay-1 mt-10">
          <ContactForm redirectTo="/thank-you" />
        </div>
      </Container>
    </section>
  );
}

