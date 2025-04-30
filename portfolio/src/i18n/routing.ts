import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "lu", "nl"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/a-propos",
      de: "/um",
      lu: "/iwwer",
      nl: "/over",
    },
    "/projects": {
      en: "/projects",
      fr: "/projets",
      de: "/Projekte",
      lu: "/Projeten",
      nl: "/projecten",
    },
    "/projects/[projectSlug]": {
      en: "/projects/[projectSlug]",
      fr: "/projets/[projectSlug]",
      de: "/Projekte/[projectSlug]",
      lu: "/Projeten/[projectSlug]",
      nl: "/projecten/[projectSlug]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
