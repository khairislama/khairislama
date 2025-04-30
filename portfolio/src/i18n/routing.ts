import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
    "/projects": {
      en: "/projects",
      fr: "/projets",
    },
    "/projects/[projectSlug]": {
      en: "/projects/[projectSlug]",
      fr: "/projets/[projectSlug]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
