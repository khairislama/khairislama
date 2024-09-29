"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Construction } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({
  href,
  title,
  className = "",
  disabled,
}: {
  href: string;
  title: string;
  className?: string;
  disabled?: boolean;
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
      href={fullLink}
      className={`${className} relative group hover:text-foreground ${
        isActive && "text-foreground"
      }`}
    >
      {disabled ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{title}</TooltipTrigger>
            <TooltipContent className="bg-foreground flex items-center gap-2">
              <Construction className="h-4 w-4" />
              <p>under construction</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        title
      )}

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
