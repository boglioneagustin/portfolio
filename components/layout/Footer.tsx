"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import { footerLinks } from "@/lib/data";
import { footerLinksEs } from "@/lib/data-es";

const socials = [
  { label: "dr", href: "https://dribbble.com/agustin-boglione", aria: "Dribbble" },
  { label: "in", href: "https://www.linkedin.com/in/agustinboglione/", aria: "LinkedIn" },
  { label: "gh", href: "https://github.com/boglioneagustin", aria: "GitHub" },
  { label: "x", href: "https://x.com/boglionealejo1", aria: "X" },
];

export default function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname === "/es" || pathname?.startsWith("/es/");
  const links = isSpanish ? footerLinksEs : footerLinks;

  return (
    <footer className="pb-5 pt-12 sm:pt-16">
      <Container>
        <div className="reveal-up rounded-[28px] bg-[#17191f] px-6 py-10 sm:px-9 sm:py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-[22px] font-semibold tracking-tight text-[#f3f3f1]">Agustin A. Boglione</span>
              {links.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-[#b7bac3] transition-colors duration-200 hover:text-[#f3f3f1]">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social grid h-10 w-10 place-items-center rounded-full bg-[#232733] text-xs font-medium text-[#f47a3c]"
                  aria-label={social.aria}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/15 pt-8 text-center text-sm text-[#e8e8eb]">
            {isSpanish ? "Copyright 2025 por Agustin A. Boglione" : "Copyright 2025 by Agustin A. Boglione"}
          </div>
        </div>
      </Container>
    </footer>
  );
}
