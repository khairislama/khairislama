import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/layout";
import { Rubik, Syne } from "next/font/google";
import HireMe from "@/components/HireMe";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Khairi Slama | Full-Stack Engineer",
    template: "%s - Khairi Slama | Full-Stack Engineer",
  },
  description:
    "Explore Khairi Slama's web development portfolio, with a focus on security, 3D web, and performance optimization. Available for opportunities in Luxembourg and France.",
  keywords:
    "Khairi Slama, Full-Stack Engineer, Web Development, Next.js, Tailwind, Freelance, Luxembourg, France, Security, 3D Blender, Tunisian Engineer, Performance, Web Solutions",
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khairi Slama",
    url: "https://khairislama.com",
    image: "https://khairislama.com/opengraph-image.png",
    sameAs: [
      "https://www.linkedin.com/in/khairislama",
      "https://www.instagram.com/khairislama/",
      "https://github.com/khairislama",
      "https://www.facebook.com/khairi.slama/",
    ],
    jobTitle: "Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in web development, security, and 3D integration, available for freelance opportunities.",
    worksFor: {
      "@type": "Organization",
      name: "Hutchinson Sousse",
    },
    alumniOf: "Polytechnique School of Sousse",
    knowsAbout: [
      "Web Development",
      "Engineering",
      "Next.js",
      "Tailwind",
      "3D Web",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sousse",
      addressCountry: "Tunisia",
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${rubik.variable} ${syne.variable} antialiased bg-background text-foreground/70`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <HireMe />
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
