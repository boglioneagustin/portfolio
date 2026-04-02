import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AnimationController from "@/components/ui/AnimationController";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agustin A. Boglione",
  description: "Portfolio landing page clone",
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
