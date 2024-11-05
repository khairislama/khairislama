"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const langPrefix = pathname.split("/")[1];

  // Build the full link with the language prefix
  const fullLink = `/${langPrefix}${href === "/" ? "" : href}`;

  // Check if the current path matches the link (ignoring the language prefix)
  const isActive =
    pathname === fullLink || (href === "/" && pathname === `/${langPrefix}`);
  return (
    <Link
      aria-label={title}
      href={fullLink}
      className={`${className} relative group hover:text-foreground h-6 w-20 text-center ${
        isActive && "text-foreground"
      }`}
    >
      {
        title
      }
      <span
        className={`h-[1px] inline-block w-0 bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
