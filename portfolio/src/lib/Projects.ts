export interface IImage {
  src: string;
  alt: string;
}

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
    technologies: IImage[];
  };
  languages: {
    name: string;
    color: string;
    value: number;
  }[];
  updated_at: string;
  featured: string;
  description: string;
  images: IImage[];
  vertical_images: IImage[];
}

export const BOOKMARKED_PROJECTS: Partial<IProject>[] = [
  {
    slug: "carthabot",
    external_link: "https://carthabot.vercel.app/",
    images: [
      {
        src: "/projects/carthabot/image-1.webp",
        alt: "a programming block of the website",
      },
    ],
  },
  {
    slug: "formulation",
    images: [
      {
        src: "/projects/formulation/image-1.webp",
        alt: "Dashboard of formulation platform",
      },
    ],
  },
  {
    slug: "strong-cast",
    github_link: "https://github.com/khairislama/strong-cast",
    external_link: "https://www.strong-cast.com",
    images: [
      {
        src: "/projects/strong-cast/image-1.webp",
        alt: "Presenting the hero section of strong cast",
      },
    ],
  },
  {
    slug: "wassalli",
    external_link: "https://wassalli.vercel.app",
    images: [
      {
        src: "/projects/wassalli/image-1.webp",
        alt: "a how to use section",
      },
    ],
  },
];

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
    github_link: null,
    external_link: "https://carthabot.vercel.app/",
    stats: {
      stars: "-",
      commits: "126",
      prs: "24",
      issues: "1",
      tests: "-",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/carthabot/image-1.webp",
        alt: "a programming block of the website",
      },
      {
        src: "/projects/carthabot/image-2.webp",
        alt: "some of the ui design",
      },
    ],
    vertical_images: [
      {
        src: "/projects/carthabot/image-vertical-1.webp",
        alt: "hero of home page",
      },
      {
        src: "/projects/carthabot/image-vertical-2.webp",
        alt: "pillar of services",
      },
    ],
  },
  {
    label: "current",
    slug: "formulation",
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
        { src: "/skills/nestjs.webp", alt: "nest js" },
        { src: "/skills/typeorm.png", alt: "typeorm" },
        { src: "/skills/postgresql.webp", alt: "postgresql" },
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
        src: "/projects/formulation/image-1.webp",
        alt: "Dashboard of formulation platform",
      },
      {
        src: "/projects/formulation/image-2.webp",
        alt: "the recipe page",
      },
    ],
    vertical_images: [
      {
        src: "/projects/formulation/image-vertical-1.webp",
        alt: "input output management",
      },
      {
        src: "/projects/formulation/image-vertical-2.webp",
        alt: "History feature",
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
    external_link: "https://www.fab619.tn",
    stats: {
      stars: "-",
      commits: "5",
      prs: "1",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/fab619/image-1.webp",
        alt: "Maintenance page",
      },
    ],
    vertical_images: [
      {
        src: "/projects/fab619/image-vertical-1.webp",
        alt: "Maintenance page",
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
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/next-intl/image-1.webp",
        alt: "next internationalization cover",
      },
    ],
    vertical_images: [
      {
        src: "/projects/next-intl/image-vertical-1.webp",
        alt: "next internationalization",
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
    github_link: null,
    external_link: "https://www.strong-cast.com",
    stats: {
      stars: "-",
      commits: "81",
      prs: "20",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/strong-cast/image-1.webp",
        alt: "Presenting the hero section of strong cast",
      },
      {
        src: "/projects/strong-cast/image-2.webp",
        alt: "Showcasing the products page and filter feature",
      },
    ],
    vertical_images: [
      {
        src: "/projects/strong-cast/image-vertical-1.webp",
        alt: "The contact us section",
      },
      {
        src: "/projects/strong-cast/image-vertical-2.webp",
        alt: "Cart information and pre-checkout",
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
      stars: "2",
      commits: "20",
      prs: "7",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/phoenix-garage/image-1.webp",
        alt: "The phoenix garage welcoming page",
      },
    ],
    vertical_images: [
      {
        src: "/projects/phoenix-garage/image-vertical-1.webp",
        alt: "Phoenix garage landing",
      },
      {
        src: "/projects/phoenix-garage/image-vertical-2.webp",
        alt: "Phoenix garage active page",
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
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
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
        src: "/projects/wassalli/image-1.webp",
        alt: "a how to use section",
      },
      {
        src: "/projects/wassalli/image-2.webp",
        alt: "the faq page of the site",
      },
    ],
    vertical_images: [
      {
        src: "/projects/wassalli/image-vertical-1.webp",
        alt: "Contact us form",
      },
      {
        src: "/projects/wassalli/image-vertical-2.webp",
        alt: "GTmetrix grade",
      },
    ],
  },
  {
    label: "done",
    slug: "slk-consulting",
    name: "Slk Consulting FR",
    type: "private",
    stories: 2,
    tags: 7,
    features: 5,
    performance: null,
    github_link: null,
    external_link: "https://slkconsulting.fr/index.html",
    stats: {
      stars: "-",
      commits: "2",
      prs: "1",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/html.svg", alt: "Html" },
        { src: "/skills/css.svg", alt: "Css" },
        { src: "/skills/javascript.svg", alt: "Javascript" },
      ],
    },
    languages: [
      { name: "CSS", color: "#ce7eb8", value: 62.8 },
      { name: "Javascript", color: "#ffd700", value: 17.9 },
      { name: "Php", color: "#b0b3d6", value: 12.9 },
      { name: "Html", color: "#e34c26", value: 6.4 },
    ],
    updated_at: "Updated on Sep 17, 2022",
    featured: "Internship",
    description:
      "A showcase website for SLK Consulting, designed with HTML, CSS, and JavaScript.",
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
    slug: "dilab",
    name: "Dilab FR",
    type: "private",
    stories: 2,
    tags: 7,
    features: 5,
    performance: null,
    github_link: null,
    external_link: "https://slkconsulting.fr/index.html",
    stats: {
      stars: "-",
      commits: "2",
      prs: "1",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/html.svg", alt: "Html" },
        { src: "/skills/css.svg", alt: "Css" },
        { src: "/skills/javascript.svg", alt: "Javascript" },
      ],
    },
    languages: [
      { name: "CSS", color: "#ce7eb8", value: 55.5 },
      { name: "Php", color: "#b0b3d6", value: 21.3 },
      { name: "Javascript", color: "#ffd700", value: 19.9 },
      { name: "Html", color: "#e34c26", value: 3.3 },
    ],
    updated_at: "Updated on Sep 17, 2022",
    featured: "Internship",
    description:
      "A showcase website for Dilab, designed with HTML, CSS, and JavaScript.",
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
    slug: "khairislama",
    name: "Khairi SLAMA",
    type: "public",
    stories: 3,
    tags: 10,
    features: 5,
    performance: {
      performance: "97%",
      structure: "91%",
      lcp: "1.2s",
      tbt: "0ms",
      cls: "0",
    },
    github_link: "https://github.com/khairislama/khairislama",
    external_link: "/",
    stats: {
      stars: "2",
      commits: "183",
      prs: "28",
      issues: "0",
      tests: "0",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 98.3 },
      { name: "CSS", color: "#ce7eb8", value: 1.5 },
      { name: "Javascript", color: "#ffd700", value: 0.2 },
    ],
    updated_at: "Currently working on...",
    featured: "Self",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    images: [
      {
        src: "/projects/khairislama/image-1.webp",
        alt: "hero screenshot",
      },
      {
        src: "/projects/khairislama/image-2.webp",
        alt: "performance",
      },
    ],
    vertical_images: [
      {
        src: "/projects/khairislama/image-vertical-1.webp",
        alt: "about me page overview",
      },
      {
        src: "/projects/khairislama/image-vertical-2.webp",
        alt: "projects list",
      },
    ],
  },
  {
    label: "tuto",
    slug: "threejs-tuto",
    name: "Three JS Tuto",
    type: "public",
    stories: 1,
    tags: 8,
    features: 5,
    performance: null,
    github_link: "https://github.com/khairislama/threeJs-tuto",
    external_link: "https://three-js-tuto.vercel.app",
    stats: {
      stars: "-",
      commits: "8",
      prs: "3",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/icons/vitejs.webp", alt: "vite js" },
        { src: "/skills/threejs.png", alt: "three js" },
      ],
    },
    languages: [
      { name: "Javascript", color: "#ffd700", value: 61.9 },
      { name: "Html", color: "#e34c26", value: 22.6 },
      { name: "CSS", color: "#ce7eb8", value: 15.5 },
    ],
    updated_at: "Updated on Jun 6",
    featured: "Self",
    description:
      "A tutorial project built with Vite and Three.js to explore 3D web development.",
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
    slug: "anime-world",
    name: "Anime World",
    type: "public",
    stories: 1,
    tags: 7,
    features: 5,
    performance: null,
    github_link: "https://github.com/khairislama/anime-world",
    external_link: "https://anime-world-nine.vercel.app",
    stats: {
      stars: "2",
      commits: "20",
      prs: "5",
      issues: "-",
      tests: "-",
      technologies: [
        { src: "/skills/nextjs.webp", alt: "next js" },
        { src: "/skills/tailwindcss.webp", alt: "tailwind css" },
      ],
    },
    languages: [
      { name: "Typescript", color: "#3178C6", value: 94.6 },
      { name: "CSS", color: "#ce7eb8", value: 4.4 },
      { name: "Javascript", color: "#ffd700", value: 1.0 },
    ],
    updated_at: "Updated on Jun 6",
    featured: "Self",
    description:
      "A tutorial project for smooth Framer Motion animations and infinite scrolling.",
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
