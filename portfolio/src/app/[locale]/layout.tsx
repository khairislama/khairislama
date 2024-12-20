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
    "Khairi Slama's portfolio showcases advanced web development with a focus on performance, security, and 3D web. Available for freelance and software engineering roles in Tunisia, Luxembourg, and France.",
  keywords:
    "Khairi Slama, Slama Khairi, Full-Stack Engineer, Web Developer, Portfolio, Next.js Developer, Tailwind CSS, Freelance Developer, Coding, Tunisia, Modern Portfolio, Performance Web, SEO Optimized, 3D Web Developer, Engineer, Coding Portfolio, Tunisian Engineer, Freelance Web Developer, Backend Security",
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
    url: "https://www.khairislama.com",
    image: "https://www.khairislama.com/opengraph-image.png",
    sameAs: [
      "https://www.linkedin.com/in/khairislama",
      "https://www.instagram.com/khairislama/",
      "https://github.com/khairislama",
      "https://www.facebook.com/khairi.slama/",
    ],
    jobTitle: "Full-Stack Engineer and Web Developer",
    description:
      "Full-Stack Engineer specializing in high-performance web development, security, and 3D integrations.",
    worksFor: {
      "@type": "Organization",
      name: "Hutchinson Sousse Industry",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Polytechnique School of Sousse",
    },
    knowsAbout: [
      "Web Development",
      "Next.js",
      "Tailwind CSS",
      "3D Web Integration",
      "Performance Optimization",
      "Security Engineering",
    ],
    tagline: "Modern Portfolio and Performance Web Specialist",
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
