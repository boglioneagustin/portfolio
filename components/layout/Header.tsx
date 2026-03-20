"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { navItems } from "@/lib/data";
import { navItemsEs } from "@/lib/data-es";

function EnglishFlag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="clip-en-flag">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-en-flag)">
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="4.6" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2.2" />
        <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="6.8" />
        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3.6" />
      </g>
      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.08)" />
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="clip-es-flag">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-es-flag)">
        <rect width="24" height="24" fill="#AA151B" />
        <rect y="6" width="24" height="12" fill="#F1BF00" />
        <rect x="7.2" y="9.2" width="2.6" height="5.4" rx="0.7" fill="#AA151B" />
      </g>
      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.08)" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isSpanish = pathname === "/es" || pathname?.startsWith("/es/");
  const visibleNavItems = isSpanish ? navItemsEs : navItems;
  const switchHref = isSpanish
    ? pathname.replace(/^\/es(?=\/|$)/, "") || "/"
    : `/es${pathname === "/" ? "" : pathname}`;
  const switchLabel = isSpanish ? "Change to English" : "Cambiar a espanol";
  const bookLabel = isSpanish ? "Reserva una llamada de 30 min" : "Book a 30 min call";
  const bookLabelShort = isSpanish ? "Reservar" : "Book call";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = Array.from(
      new Set([
        "/",
        "/about",
        "/all-works",
        "/contact",
        "/es",
        "/es/about",
        "/es/all-works",
        "/es/contact",
        switchHref,
        ...visibleNavItems.map((item) => item.href),
      ]),
    );

    targets.forEach((href) => {
      if (href) router.prefetch(href);
    });
  }, [router, switchHref, visibleNavItems]);

  return (
    <header className={`header-shell pt-2 sm:pt-2.5 ${scrolled ? "is-scrolled" : ""}`}>
      <Container>
        <div className="reveal-fade relative z-[1]">
          <div className="flex items-center justify-between gap-2 sm:hidden">
            <Link
              href="/"
              aria-label="Go to home"
              className="button-soft relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            >
              <Image src="/images/avatar/me.avif" alt="Alejo logo" fill className="object-cover" sizes="44px" priority />
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="https://calendly.com/boglioneagustin/30min"
                target="_blank"
                rel="noreferrer"
                className="header-nav-type button-soft inline-flex h-[48px] items-center rounded-full bg-white px-[18px] text-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <span>{bookLabelShort}</span>
              </a>

              <Link
                href={switchHref}
                aria-label={switchLabel}
                title={switchLabel}
                className="button-soft inline-flex h-[48px] items-center gap-2 rounded-full border border-[rgba(0,0,0,0.06)] bg-white px-3 text-[12px] font-medium text-[#2a2a2e] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <span className="shrink-0">{isSpanish ? <EnglishFlag /> : <SpainFlag />}</span>
                <span className="whitespace-nowrap leading-none max-[430px]:hidden">{switchLabel}</span>
                <span className="hidden whitespace-nowrap leading-none max-[430px]:inline">{isSpanish ? "EN" : "ES"}</span>
              </Link>

              <a
                href="mailto:boglioneagustin@gmail.com"
                aria-label="Email"
                className="button-soft grid h-[48px] w-[48px] place-items-center rounded-full border border-[rgba(0,0,0,0.06)] bg-white text-[#f05a2a] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] sm:hidden">
            {visibleNavItems.map((item) => (
              <Link key={item.label} href={item.href} prefetch className="header-nav-type nav-link rounded-full px-[8px] py-[5px] text-[14px]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-between gap-3 sm:flex">
            <div className="flex h-[56px] items-center rounded-full bg-white py-[10px] pl-[8px] pr-[18px] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <Link
                href="/"
                aria-label="Go to home"
                className="button-soft relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-white/80"
              >
                <Image src="/images/avatar/me.avif" alt="Alejo logo" fill className="object-cover" sizes="36px" priority />
              </Link>
              <nav className="ml-[12px] flex items-center gap-[14px]">
                {visibleNavItems.map((item) => (
                  <Link key={item.label} href={item.href} prefetch className="header-nav-type nav-link rounded-full px-[8px] py-[4px]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-[10px]">
              <a
                href="https://calendly.com/boglioneagustin/30min"
                target="_blank"
                rel="noreferrer"
                className="header-nav-type button-soft inline-flex h-[56px] items-center rounded-full bg-white px-[30px] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                {bookLabel}
              </a>

              <Link
                href={switchHref}
                aria-label={switchLabel}
                title={switchLabel}
                className="button-soft inline-flex h-[56px] items-center gap-2.5 rounded-full border border-[rgba(0,0,0,0.06)] bg-white px-4 text-[14px] font-medium text-[#2a2a2e] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <span className="shrink-0">{isSpanish ? <EnglishFlag /> : <SpainFlag />}</span>
                <span className="whitespace-nowrap leading-none">{switchLabel}</span>
              </Link>

              <a
                href="mailto:boglioneagustin@gmail.com"
                aria-label="Email"
                className="button-soft grid h-[56px] w-[56px] place-items-center rounded-full border border-[rgba(0,0,0,0.06)] bg-white text-[#f05a2a] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
