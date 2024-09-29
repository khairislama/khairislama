"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignJustify,
  BookOpenText,
  ChartNoAxesGantt,
  Drum,
  House,
  Mail,
} from "lucide-react";

export default function NavBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => setIsOpen(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="flex lg:hidden items-center bg-transparent text-foreground/70 h-full px-2 sm:px-3 md:px-6 ring-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlignJustify className="h-6 w-6 sm:h-8 sm:w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background ml-6 shadow-lg">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <nav>
            <DropdownMenuItem
              className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
              onClick={handleItemClick}
            >
              <Link href="/" className="h-full w-full flex gap-1">
                <House className="h-4 w-4" /> Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
              onClick={handleItemClick}
            >
              <Link href="/build" className="h-full w-full flex gap-1">
                <BookOpenText className="h-4 w-4" /> About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
              onClick={handleItemClick}
            >
              <Link href="/connect" className="h-full w-full flex gap-1">
                <Drum className="h-4 w-4" /> Play
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
              onClick={handleItemClick}
            >
              <Link href="/code" className="h-full w-full flex gap-1">
                <ChartNoAxesGantt className="h-4 w-4" /> Projects
              </Link>
            </DropdownMenuItem>
          </nav>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={handleItemClick}
          >
            <Link
              href="mailto:khairi.slama.1996.br@gmail.com"
              className="h-full w-full flex gap-1"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
