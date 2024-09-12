import Image from "next/image";

function Picture() {
  return (
    <div className="relative w-full h-[650px]">
      <div className="w-full rounded-3xl overflow-hidden h-[650px]">
        <Image
          src="/khairi SLAMA - graduation.webp"
          alt="Khairi SLAMA"
          width={705}
          height={969}
          className="brightness-125 contrast-125"
        />
      </div>
      <Image
        src="/shapes/rectangle-horizontal.svg"
        alt="Horizontal rectangle"
        width={120}
        height={36}
        className="absolute -top-5 right-1 z-20"
      />
      <Image
        src="/shapes/rectangle-vertical.svg"
        alt="vertical rectangle"
        width={61}
        height={193}
        className="absolute bottom-8 -left-10 z-20"
      />
    </div>
  );
}

export default Picture;
