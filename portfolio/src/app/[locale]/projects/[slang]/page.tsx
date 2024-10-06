import { Construction } from "lucide-react";

function SingleProjectPage() {
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
