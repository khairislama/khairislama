import Image from "next/image";

function Overview({
  image,
}: {
  image: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className="w-96 rounded-xl overflow-hidden hidden md:block">
      <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        className="object-cover w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-background/30 flex items-center justify-center shadow-[inset_1px_1px_150px_12px_rgba(0,0,0,0.9)]">
        <h4 className="text-white font-semibold text-2xl">click for details</h4>
      </div>
    </div>
  );
}

export default Overview;
