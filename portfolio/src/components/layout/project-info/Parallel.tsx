import Image from "next/image";

function ParallelImages() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-10">
      <div className="w-full overflow-hidden rounded-xl relative group">
        <Image
          src="/600-650.png"
          alt=""
          width={600}
          height={650}
          className="object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_20px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
      </div>

      <div className="w-full overflow-hidden rounded-xl relative group">
        <Image
          src="/600-650.png"
          alt=""
          width={600}
          height={650}
          className="object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-background/30 shadow-[inset_1px_1px_50px_12px_rgba(0,0,0,0.9)] group-hover:shadow-[inset_1px_1px_20px_12px_rgba(0,0,0,0.5)] transition duration-500 ease-in-out" />
      </div>
    </div>
  );
}

export default ParallelImages;
