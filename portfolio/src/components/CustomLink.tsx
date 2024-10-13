"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const langPrefix = pathname.split("/")[1];

  // Build the full link with the language prefix
  const fullLink = `/${langPrefix}${href === "/" ? "" : href}`;
  return (
    <Link href={fullLink} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
