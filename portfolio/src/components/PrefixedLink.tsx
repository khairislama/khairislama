"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function PrefixedLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const langPrefix = pathname.split("/")[1];

  // Build the full link with the language prefix
  const fullLink = `/${langPrefix}${href === "/" ? "" : href}`;
  return (
    <Link href={fullLink} className={className}>
      {children}
    </Link>
  );
}

export default PrefixedLink;
