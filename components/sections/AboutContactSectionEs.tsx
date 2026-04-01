import Container from "@/components/layout/Container";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutContactSectionEs() {
  return (
    <section className="pt-16 sm:pt-20">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Contacto"
            title={
              <>
                Tenes un proyecto
                <br />
                en mente?
              </>
            }
          />
        </div>
        <div className="reveal-up reveal-delay-1 mt-10">
          <ContactForm
            labels={{ name: "Nombre", email: "Email", project: "Detalles del proyecto" }}
            placeholders={{ name: "Tu nombre", email: "tu@email.com", project: "Contame que queres construir" }}
            submitLabel="Enviar"
            helperText="**Te respondo dentro de 24 horas**"
            redirectTo="/es/thank-you"
            messages={{
              sending: "Enviando...",
              success: "Mensaje enviado. Te respondo a la brevedad.",
              error: "No se pudo enviar el mensaje. Intenta nuevamente.",
              invalid: "Completa todos los campos con un email valido.",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
