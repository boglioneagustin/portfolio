import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-[980px] text-center">
        <h1 className="reveal-up text-[44px] font-medium leading-[1.08] tracking-[-0.02em] text-[#1f2228] sm:text-[62px] lg:text-[72px]">
          <span className="text-[#ef4f2b]">An AI &amp; Automation specialist</span>
          <span className="relative inline-block pl-4 align-middle">
            <span className="relative inline-flex h-[66px] w-[66px] overflow-hidden rounded-[18px] border border-white shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
              <Image src="/images/avatar/me.avif" alt="Agustin A. avatar" fill className="object-cover" sizes="66px" priority />
            </span>
          </span>
          <br />
          <span className="text-[#1f2228]">who builds scalable systems that drive real business growth.</span>
        </h1>

        <div className="reveal-up reveal-delay-1 mx-auto mt-12 w-full max-w-[930px] rounded-[28px] border border-white bg-white/55 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[380px] lg:h-[420px]">
            <Image
              src="/images/about/portada-yo.jpg"
              alt="About hero cover"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 930px, (min-width: 1024px) 88vw, 94vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
