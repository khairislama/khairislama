"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function PrefixedLink({
  href,
  className = "",
  children,
  target = "_self",
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: "_blank" | "_self"; // Only accepts "_blank" or "_self"
}) {
  const pathname = usePathname();
  const langPrefix = pathname.split("/")[1];

  // Build the full link with the language prefix
  const fullLink = `/${langPrefix}${href === "/" ? "" : href}`;
  return (
    <Link href={fullLink} className={className} target={target}>
      {children}
    </Link>
  );
}

export default PrefixedLink;
