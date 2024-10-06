import Image from "next/image";

function Overview() {
  return (
    <div className="h-44 w-44 rounded-xl overflow-hidden">
      <Image
        src="/projects/strong-cast/metrix.webp"
        alt="eclipse"
        width={1269}
        height={819}
        className="object-cover w-full pointer-events-none brightness-125"
      />
    </div>
  );
}

export default Overview;
