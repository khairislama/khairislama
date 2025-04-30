import { useTranslations } from "next-intl";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import NavLanguage from "./NavLanguage";

export default function NavbarTop() {
  const translations = useTranslations("Navbar");

  // Loading component to display for all imports
  const Loading = () => <Skeleton className="w-24 h-5 bg-foreground/30" />;

  return (
    <div className="h-6 lg:h-8 w-full">
      <div className="h-full flex items-center justify-center lg:justify-end gap-8 max-w-7xl mx-auto text-xs">
        <span className="cursor-default">+ 216 54 00 73 87</span>
        <Link
          aria-label="Download CV"
          href="/CV-nov-2024-anglais.pdf"
          className="cursor-pointer"
          download={true}
        >
          {translations("cv")}
        </Link>
        <Suspense fallback={<Loading />}>
          <NavLanguage />
        </Suspense>
      </div>
    </div>
  );
}
