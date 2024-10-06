export interface IProject {
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

export const CURRENT_PROJECTS: IProject[] = [
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
];

export const WORK_PROJECTS: IProject[] = [
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
];

export const LEARNING_PROJECTS: IProject[] = [
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
  {
    name: "Robot playground",
    type: "public",
    language: { name: "typescript", color: "#FAB432" },
    updated_at: "Updated on Jul 9",
    featured: "Featured project",
    description: "description",
    image: { src: "", alt: "", width: 144, height: 144 },
  },
];
