export interface IProject {
  label: string;
  slang: string;
  name: string;
  type: "public" | "private";
  stories: number;
  tags: number;
  performance: boolean;
  github_link?: string;
  external_link?: string;
  language: {
    name: string;
    color: string;
  };
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
    slang: "carthabot",
    name: "Carthabot",
    type: "private",
    stories: 2,
    tags: 7,
    performance: true,
    github_link: "https://github.com/khairislama/carthabot",
    external_link: "https://carthabot.vercel.app/en",
    language: { name: "typescript", color: "#3178C6" },
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
    slang: "hutchinson-formulation",
    name: "Formulation",
    type: "private",
    stories: 0,
    tags: 2,
    performance: false,
    language: { name: "Nest Js", color: "#E0234E" },
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
    slang: "fab-619",
    name: "Fab 619 Showcase",
    type: "private",
    stories: 0,
    tags: 2,
    performance: false,
    language: { name: "typescript", color: "#3178C6" },
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
