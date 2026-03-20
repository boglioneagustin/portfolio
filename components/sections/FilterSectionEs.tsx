import Image from "next/image";
import Container from "@/components/layout/Container";
import { clientLogos } from "@/lib/data-es";

export default function FilterSectionEs() {
  return (
    <section className="pt-20 sm:pt-24">
      <Container>
        <div className="reveal-up mx-auto rounded-[44px] bg-[#f8f8f7] px-4 py-6 shadow-[0_10px_28px_rgba(0,0,0,0.02)] sm:rounded-[72px] sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
            <p className="clients-label shrink-0 text-left">Clientes y colaboradores</p>

            <span className="hidden h-11 w-px bg-black/[0.05] lg:block" />

            <div className="clients-marquee w-full overflow-hidden">
              <div className="clients-marquee-track">
                {[0, 1].map((copyIndex) => (
                  <div key={`group-${copyIndex}`} className="clients-marquee-group">
                    {clientLogos.map((item) => (
                      <div key={`${copyIndex}-${item.id}`} className="client-placeholder-tile h-[56px] w-[128px] shrink-0">
                        <Image src={item.src} alt={item.alt} fill sizes={`${item.width}px`} className="client-logo-image object-contain px-2 py-1" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
