import Container from "@/components/layout/Container";
import ExperienceStack, { type AboutStackCard } from "@/components/sections/ExperienceStack";

const aboutCards: AboutStackCard[] = [
  {
    title: "Lo que hago",
    text: "Ayudo a empresas a optimizar procesos y escalar operaciones mediante automatizacion, inteligencia artificial y desarrollo de software. Diseno soluciones que conectan sistemas, simplifican workflows y transforman datos en decisiones mas estrategicas.",
  },
  {
    title: "Background",
    text: "Soy de Argentina y he trabajado con empresas de distintos paises, incluyendo Argentina, Chile, Peru y Estados Unidos. Mi trabajo se centra en automatizacion, inteligencia artificial y desarrollo de software para mejorar operaciones.",
  },
  {
    title: "Mi enfoque",
    text: "Creo que los mejores sistemas comienzan entendiendo el problema antes de escribir una sola linea de codigo. Analizo procesos, detecto oportunidades y construyo soluciones escalables y faciles de mantener.",
  },
  {
    title: "Carrera",
    entries: [
      ["Workflow Automation - WordPress Developer - IT Support", "Feb 24 - Presente"],
      ["Founder", "Jan 3 - Presente"],
      ["Automation & WordPress Developer", "Feb 24 - Dic 24"],
      ["System Analyst", "Jun 24 - Jul 26"],
      ["WordPress Developer - IT", "Jan 23 - Sep 23"],
    ],
  },
];

export default function ExperienceSectionEs() {
  return (
    <section id="sobre-mi" className="pt-24 sm:pt-28 about-section-shell">
      <Container>
        <div className="about-layout md:grid md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start md:gap-10 lg:gap-12 xl:gap-16">
          <div className="about-sticky-block reveal-up">
            <span className="inline-block rounded-full bg-[#f8f8f7] px-6 py-2.5 about-tag">Sobre mi</span>
            <h2 className="about-title max-w-[540px] text-center md:text-left">Mentalidad, metodos y experiencia</h2>
            <p className="about-intro max-w-[520px] text-center md:text-left">
              Diseno sistemas que combinan producto, automatizacion y ejecucion para que los equipos avancen mas rapido
              sin perder claridad.
            </p>
            <a
              href="/cv/Alejo-Boglione-CV.pdf"
              download
              className="btn-primary inline-flex items-center gap-3 rounded-full px-9 py-4 text-[16px] font-medium text-white"
            >
              <span>Descargar CV</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 18H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          <div>
            <ExperienceStack cards={aboutCards} />
          </div>
        </div>
      </Container>
    </section>
  );
}
