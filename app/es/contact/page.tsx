import Container from "@/components/layout/Container";
import FaqSectionEs from "@/components/sections/FaqSectionEs";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactEsPage() {
  return (
    <main className="min-h-screen pb-10">
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
              containerClassName="max-w-[760px]"
            />
          </div>
          <div className="reveal-up reveal-delay-1 mt-10 sm:mt-12">
            <ContactForm
              labels={{ name: "Nombre", email: "Email", project: "Informacion del proyecto" }}
              placeholders={{ name: "Tu nombre", email: "tu@email.com", project: "Contame sobre tu proyecto" }}
              submitLabel="Enviar"
              helperText="**Te respondo dentro de 24 horas**"
            />
          </div>
        </Container>
      </section>

      <FaqSectionEs />
    </main>
  );
}
