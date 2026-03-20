import Container from "@/components/layout/Container";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactSectionEs() {
  return (
    <section id="contacto" className="pt-24 sm:pt-28">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Contacto"
            title="Tenes un proyecto en mente?"
            description="Compartime algunos detalles y te respondo con un enfoque claro para avanzar."
          />
        </div>
        <div className="reveal-up reveal-delay-1 mt-10">
          <ContactForm
            labels={{ name: "Nombre", email: "Email", project: "Informacion del proyecto" }}
            placeholders={{ name: "Tu nombre", email: "tu@email.com", project: "Contame sobre tu proyecto" }}
            submitLabel="Enviar"
            helperText="**Te respondo dentro de 24 horas**"
          />
        </div>
      </Container>
    </section>
  );
}
