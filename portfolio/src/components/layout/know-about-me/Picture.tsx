import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  bottomFocused?: boolean;
}

function Picture({ src, alt, width, height, bottomFocused }: Props) {
  return (
    <div className="relative w-full h-[450px] sm:h-[650px]">
      {/* OUTER WRAPPER - handles overall height and responsiveness */}
      <div className="w-full h-full rounded-3xl overflow-hidden relative">
        {/* INNER WRAPPER - ensures image scaling and overflow control */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`brightness-105 w-full h-full object-cover ${
            bottomFocused ? "object-bottom" : "object-top"
          }`}
        />
      </div>

      {/* ADDITIONAL SHAPES */}
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
        className="absolute -bottom-10 lg:bottom-8 left-0 lg:-left-10 z-20"
      />
    </div>
  );
}

export default Picture;
