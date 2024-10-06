import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { Rubik, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import HireMe from "@/components/HireMe";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${syne.variable} antialiased debug-screens bg-background text-foreground/70`}
      >
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
      </body>
    </html>
  );
}
