"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lang = pathname.split("/")[1] || "en";
    switch (lang) {
      case "en":
        setCurrentLang("English");
        break;
      case "fr":
        setCurrentLang("Français");
        break;
      case "de":
        setCurrentLang("Deutsch");
        break;
      case "lu":
        setCurrentLang("Lëtzebuergesch");
        break;
      case "nl":
        setCurrentLang("Nederlands");
        break;

      default:
        setCurrentLang("English");
        break;
    }
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    setIsOpen(false);
    const isHomepage =
      pathname === "/" || pathname === `/${pathname.split("/")[1]}`;
    const newPath = isHomepage ? `/${lang}` : `/${lang}${pathname.slice(3)}`;
    router.push(newPath);
  };
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="flex items-center px-2 focus:border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLang}
        <ChevronDown className="h-4 w-4 ml-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card ml-6 shadow-lg">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={() => changeLanguage("en")}
          >
            EN
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={() => changeLanguage("fr")}
          >
            FR
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={() => changeLanguage("de")}
          >
            DE
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={() => changeLanguage("lu")}
          >
            LU
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary hover:text-primary-foreground transition duration-200 ease-out"
            onClick={() => changeLanguage("nl")}
          >
            NL
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
