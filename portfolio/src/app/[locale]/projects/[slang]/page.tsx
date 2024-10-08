import { PROJECTS } from "@/lib/Projects";
import { Construction } from "lucide-react";

function SingleProjectPage({ params }: { params: { slang: string } }) {
  const project = PROJECTS.filter((project) => project.slang === params.slang);
  console.log(project);
  return (
    <main className="w-full overflow-hidden h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Under Construction</h1>
        <p className="text-lg text-justify font-semibold">
          This page is still under construction
        </p>
        <Construction className="h-24 w-24" />
      </div>
    </main>
  );
}

export default SingleProjectPage;

export async function generateStaticParams() {
  const projects = PROJECTS;

  // Explanation: We need to return an array of objects with the id property set to the story id. This will generate a static page for each story.
  // Example: [{id: "story-1"}, { id: "story2" }, ...]
  const paths = projects.map((project) => {
    slang: project.slang;
  });

  return paths;
}
