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
  github_link: string | null;
  external_link: string | null;
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
    performance: null,
    github_link: "https://github.com/khairislama/carthabot",
    external_link: "https://carthabot.vercel.app/en",
    stats: {
      stars: "-",
      commits: "126",
      prs: "24",
      issues: "1",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 95.8 },
      { name: "CSS", color: "#ce7eb8", value: 3.7 },
      { name: "Javascript", color: "#ffd700", value: 0.5 },
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
    stories: 2,
    tags: 9,
    features: 6,
    performance: null,
    github_link: null,
    external_link: null,
    stats: {
      stars: "-",
      commits: "807",
      prs: "190",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nestjs.png", alt: "nest js" },
        { src: "/skills/typeorm.png", alt: "typeorm" },
        { src: "/skills/postgresql.png", alt: "postgresql" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 99.8 },
      { name: "Other", color: "#f8f0f0", value: 0.2 },
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
    stories: 1,
    tags: 8,
    features: 6,
    performance: null,
    github_link: null,
    external_link: "fab619.tn",
    stats: {
      stars: "-",
      commits: "5",
      prs: "1",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 92.8 },
      { name: "CSS", color: "#ce7eb8", value: 6.4 },
      { name: "Javascript", color: "#ffd700", value: 0.8 },
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
  {
    label: "tuto",
    slug: "next-internationalization",
    name: "Next Internationalization",
    type: "public",
    stories: 1,
    tags: 7,
    features: 5,
    performance: null,
    github_link: "https://github.com/khairislama/next-js-internationalization",
    external_link: null,
    stats: {
      stars: "-",
      commits: "8",
      prs: "2",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 85.3 },
      { name: "Javascript", color: "#ffd700", value: 12.5 },
      { name: "CSS", color: "#ce7eb8", value: 2.2 },
    ],
    updated_at: "Updated on Sep 10",
    featured: "Tutorial",
    description:
      "A basic Next.js project to test internationalization using the next-intl package.",
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
    label: "done",
    slug: "strong-cast",
    name: "Strong Cast",
    type: "private",
    stories: 2,
    tags: 7,
    features: 5,
    performance: {
      performance: "98%",
      structure: "100%",
      lcp: "1.0s",
      tbt: "65ms",
      cls: "0",
    },
    github_link: "https://github.com/khairislama/strong-cast",
    external_link: "https://www.strong-cast.com",
    stats: {
      stars: "-",
      commits: "81",
      prs: "20",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 99.1 },
      { name: "Other", color: "#f8f0f0", value: 0.9 },
    ],
    updated_at: "Updated on Mar 9",
    featured: "Client project",
    description: "An e-commerce platform for selling casts.",
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
    label: "tuto",
    slug: "phoenix-garage",
    name: "Phoenix Garage",
    type: "public",
    stories: 1,
    tags: 8,
    features: 6,
    performance: null,
    github_link: "https://github.com/khairislama/phoenix-garage",
    external_link: "https://phoenix-garage.vercel.app",
    stats: {
      stars: "-",
      commits: "20",
      prs: "7",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 90.5 },
      { name: "CSS", color: "#ce7eb8", value: 6.9 },
      { name: "Javascript", color: "#ffd700", value: 2.6 },
    ],
    updated_at: "Updated on Jun 13",
    featured: "Tutorial",
    description: "Next.js project showcasing interactive 3D blender models.",
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
    label: "tuto",
    slug: "robot-playground",
    name: "Robot Playground",
    type: "public",
    stories: 2,
    tags: 7,
    features: 6,
    performance: null,
    github_link: "https://github.com/khairislama/robot-playground",
    external_link: "https://robot-playground-three.vercel.app",
    stats: {
      stars: "-",
      commits: "6",
      prs: "2",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 84.1 },
      { name: "CSS", color: "#ce7eb8", value: 11.6 },
      { name: "Javascript", color: "#ffd700", value: 4.3 },
    ],
    updated_at: "Updated on Jun 6",
    featured: "Tutorial",
    description:
      "An experimental 3D web project using Next.js, Three.js, React Three Fiber, and postprocessing.",
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
    label: "done",
    slug: "wassalli",
    name: "Wassalli",
    type: "private",
    stories: 3,
    tags: 8,
    features: 6,
    performance: {
      performance: "96%",
      structure: "98%",
      lcp: "621ms",
      tbt: "0ms",
      cls: "0.12",
    },
    github_link: null,
    external_link: "https://wassalli.vercel.app",
    stats: {
      stars: "-",
      commits: "63",
      prs: "12",
      issues: "-",
      tests: "24",
      technologies: [
        { src: "/icons/nextjs.png", alt: "next js" },
        { src: "/skills/tailwindcss.png", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 95.9 },
      { name: "Javascript", color: "#ffd700", value: 2.1 },
      { name: "CSS", color: "#ce7eb8", value: 2.0 },
    ],
    updated_at: "Updated on Oct 23, 2022",
    featured: "Internship",
    description:
      "Wassalli is a digital platform designed to streamline package delivery between France and North Africa.",
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
