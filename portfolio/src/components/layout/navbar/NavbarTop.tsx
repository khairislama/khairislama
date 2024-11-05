import { useTranslations } from "next-intl";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export default function NavbarTop() {
  const translations = useTranslations("Navbar");

  // Loading component to display for all imports
  const Loading = () => (
    <Skeleton className="w-24 h-5 bg-foreground/30" />
  );

  const NavLanguage = dynamic(() => import('./NavLanguage'), {
    loading: () => <Loading />,
    ssr: false,
  });

  return (
    <div className="h-6 lg:h-8 w-full">
      <div className="h-full flex items-center justify-center lg:justify-end gap-8 max-w-7xl mx-auto text-xs">
        <span className="cursor-default">+ 216 54 00 73 87</span>
        <Link aria-label="Download CV" href="" className="cursor-pointer">
          {translations("cv")}
        </Link>
        <NavLanguage />
      </div>
    </div>
  );
}
