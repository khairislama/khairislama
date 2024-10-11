export interface IProject {
  label: string;
  slug: string;
  name: string;
  type: "public" | "private";
  stories: number;
  tags: number;
  features: number;
  performance: {
    lcp: string;
    structure: string;
    performance: string;
    tbt: string;
    cls: string;
  } | null;
  github_link?: string;
  external_link?: string;
  stats: {
    stars: string;
    commits: string;
    prs: string;
    issues: string;
    tests: string;
    technologies: {
      src: string;
      alt: string;
    }[];
  };
  languages: {
    name: string;
    color: string;
    value: number;
  }[];
  updated_at: string;
  featured: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  vertical_images: {
    src: string;
    alt: string;
  }[];
}

export const PROJECTS: IProject[] = [
  {
    label: "current",
    slug: "carthabot",
    name: "Carthabot",
    type: "private",
    stories: 2,
    tags: 7,
    features: 6,
    performance: {
      lcp: "1.0s",
      structure: "100%",
      performance: "98%",
      tbt: "65ms",
      cls: "0",
    },
    github_link: "https://github.com/khairislama/carthabot",
    external_link: "https://carthabot.vercel.app/en",
    stats: {
      stars: "72.6k",
      commits: "86",
      prs: "14",
      issues: "7",
      tests: "64",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 84.1 },
      { name: "CSS", color: "#ce7eb8", value: 11.6 },
      { name: "Javascript", color: "#ffd700", value: 3.4 },
    ],
    updated_at: "Currently working on...",
    featured: "Client project",
    description:
      "Interactive multi-language STEM learning platform with robots.",
    images: [
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
    ],
    vertical_images: [
      {
        src: "/600-650.png",
        alt: "blank image",
      },
      {
        src: "/600-650.png",
        alt: "blank image",
      },
    ],
  },
  {
    label: "current",
    slug: "hutchinson-formulation",
    name: "Formulation",
    type: "private",
    stories: 0,
    tags: 2,
    features: 7,
    performance: null,
    stats: {
      stars: "72.6k",
      commits: "86",
      prs: "14",
      issues: "7",
      tests: "64",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Nest Js", color: "#E0234E", value: 84.1 },
      { name: "CSS", color: "#ce7eb8", value: 11.6 },
      { name: "Javascript", color: "#ffd700", value: 3.4 },
    ],
    updated_at: "Currently working on...",
    featured: "Work project",
    description:
      "Cloud-based formulation solution using NestJS and PostgreSQL.",
    images: [
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
    ],
    vertical_images: [
      {
        src: "/600-650.png",
        alt: "blank image",
      },
      {
        src: "/600-650.png",
        alt: "blank image",
      },
    ],
  },
  {
    label: "current",
    slug: "fab-619",
    name: "Fab 619 Showcase",
    type: "private",
    stories: 0,
    tags: 2,
    features: 7,
    performance: null,
    stats: {
      stars: "72.6k",
      commits: "86",
      prs: "14",
      issues: "7",
      tests: "64",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Nest Js", color: "#E0234E", value: 84.1 },
      { name: "CSS", color: "#ce7eb8", value: 11.6 },
      { name: "Javascript", color: "#ffd700", value: 3.4 },
    ],
    updated_at: "Updated on Aug 4",
    featured: "Client project",
    description: "Showcase portfolio website for Fab 619.",
    images: [
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
      {
        src: "/1920-1080.png",
        alt: "blank image",
      },
    ],
    vertical_images: [
      {
        src: "/600-650.png",
        alt: "blank image",
      },
      {
        src: "/600-650.png",
        alt: "blank image",
      },
    ],
  },
];
