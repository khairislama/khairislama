export interface IProject {
  label: string;
  slang: string;
  name: string;
  type: "public" | "private";
  language: {
    name: string;
    color: string;
  };
  updated_at: string;
  featured: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const PROJECTS: IProject[] = [
  {
    label: "current",
    slang: "carthabot",
    name: "Carthabot",
    type: "private",
    language: { name: "typescript", color: "#3178C6" },
    updated_at: "Currently working on...",
    featured: "Client project",
    description:
      "Interactive multi-language STEM learning platform with robots.",
    image: {
      src: "/projects/carthabot/hero.webp",
      alt: "carthabot hero",
      width: 1866,
      height: 912,
    },
  },
  {
    label: "current",
    slang: "hutchinson-formulation",
    name: "Formulation",
    type: "private",
    language: { name: "Nest Js", color: "#E0234E" },
    updated_at: "Currently working on...",
    featured: "Work project",
    description:
      "Cloud-based formulation solution using NestJS and PostgreSQL.",
    image: {
      src: "/projects/formulation/recipe.webp",
      alt: "formulation project",
      width: 1920,
      height: 924,
    },
  },
  {
    label: "current",
    slang: "fab-619",
    name: "Fab 619 Showcase",
    type: "private",
    language: { name: "typescript", color: "#3178C6" },
    updated_at: "Updated on Aug 4",
    featured: "Client project",
    description: "Showcase portfolio website for Fab 619.",
    image: {
      src: "/projects/fab619/maintenance.webp",
      alt: "Strong cast",
      width: 1269,
      height: 819,
    },
  },
  {
    label: "done",
    slang: "robot-playground",
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    label: "done",
    slang: "robot-playground",
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    label: "tuto",
    slang: "robot-playground",
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    label: "tuto",
    slang: "robot-playground",
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
];
