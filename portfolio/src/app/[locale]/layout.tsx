import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { Rubik, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import HireMe from "@/components/HireMe";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${syne.variable} antialiased bg-background text-foreground/70`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <HireMe />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
