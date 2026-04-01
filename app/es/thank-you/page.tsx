import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ThankYouEsPage() {
  return (
    <main className="min-h-[70vh] pb-10 pt-20 sm:pt-28">
      <Container>
        <section className="reveal-up mx-auto max-w-[760px] rounded-[32px] bg-white px-6 py-10 text-center shadow-[0_16px_34px_rgba(0,0,0,0.04)] sm:px-10 sm:py-14">
          <span className="section-pill mx-auto inline-flex rounded-full bg-[#f5f5f3] px-5 py-2">Gracias</span>
          <h1 className="section-heading mt-6 text-[42px] leading-[1.08] sm:text-[56px]">Mensaje enviado con exito</h1>
          <p className="section-description mx-auto mt-5 max-w-[620px] text-[18px] leading-[1.4] sm:text-[22px]">
            Gracias por escribirme. Ya recibi tu mensaje y te voy a responder a la brevedad.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/es" className="btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-[16px] font-medium text-white">
              Volver al inicio
            </Link>
            <Link
              href="/es/all-works"
              className="button-soft inline-flex items-center rounded-full bg-[#f7f7f6] px-8 py-3.5 text-[16px] font-medium text-[#2f2f34]"
            >
              Ver proyectos
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
