import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AnimationController from "@/components/ui/AnimationController";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://boglioneagustin.com"),
  title: "Boglione Agustin | Portfolio",
  description:
    "AI and automation specialist portfolio focused on scalable web systems, workflow automation, custom software development, and business-driven digital solutions.",
  keywords: [
    "Boglione Agustin",
    "Portfolio",
    "AI Automation",
    "Workflow Automation",
    "Web Development",
    "Software Engineer",
    "System Integration",
    "Full-stack Developer",
  ],
  authors: [{ name: "Boglione Agustin" }],
  creator: "Boglione Agustin",
  publisher: "Boglione Agustin",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Boglione Agustin | Portfolio",
    description:
      "AI and automation specialist portfolio focused on scalable web systems, workflow automation, custom software development, and business-driven digital solutions.",
    url: "https://boglioneagustin.com",
    siteName: "Boglione Agustin Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/avatar/me.avif",
        width: 512,
        height: 512,
        alt: "Boglione Agustin portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boglione Agustin | Portfolio",
    description:
      "AI and automation specialist portfolio focused on scalable web systems, workflow automation, custom software development, and business-driven digital solutions.",
    images: ["/images/avatar/me.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnimationController />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
