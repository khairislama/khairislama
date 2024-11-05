import { IProject, PROJECTS } from "@/lib/Projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://khairislama.com";
  const projects_map = PROJECTS.map((project: IProject) => {
    return {
      url: baseUrl + `/projects/` + project.slug,
      lastModified: project.updated_at_date ?? new Date(),
      alternates: {
        languages: {
          de: baseUrl + "/de/projects/" + project.slug,
          en: baseUrl + "/en/projects/" + project.slug,
          fr: baseUrl + "/fr/projects/" + project.slug,
          lu: baseUrl + "/lu/projects/" + project.slug,
          nl: baseUrl + "/nl/projects/" + project.slug,
        },
      },
    };
  });
  return [
    {
      url: baseUrl + `/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          de: baseUrl + "/de/",
          en: baseUrl + "/en/",
          fr: baseUrl + "/fr/",
          lu: baseUrl + "/lu/",
          nl: baseUrl + "/nl/",
        },
      },
    },
    {
      url: baseUrl + `/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          de: baseUrl + "/de/about",
          en: baseUrl + "/en/about",
          fr: baseUrl + "/fr/about",
          lu: baseUrl + "/lu/about",
          nl: baseUrl + "/nl/about",
        },
      },
    },
    {
      url: baseUrl + `/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          de: baseUrl + "/de/projects",
          en: baseUrl + "/en/projects",
          fr: baseUrl + "/fr/projects",
          lu: baseUrl + "/lu/projects",
          nl: baseUrl + "/nl/projects",
        },
      },
    },
    ...projects_map,
  ];
}
