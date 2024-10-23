import Image from "next/image";

export const runtime = "edge";

function Picture() {
  return (
    <div className="relative w-48 h-48">
      <Image
        src="/hero/eclipse2.svg"
        alt="eclipse 2"
        fill
        className="absolute inset-0 z-10 object-cover pointer-events-none blur-lg brightness-200"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/hero/eclipse1.svg"
        alt="eclipse 1"
        fill
        className="absolute inset-0 z-20 drop-shadow-2xl pointer-events-none blur-lg brightness-200"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/hero/gradient.svg"
        alt="gradient"
        fill
        className="absolute inset-0 z-30 pointer-events-none brightness-200"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="absolute z-40 inset-0 m-auto h-32 w-32 rounded-full border-2 border-border overlay-hidden">
        <Image
          src="/avatars/Avatar-1.webp"
          alt="avatar 1"
          fill
          className="object-cover rounded-full"
          sizes="30vw"
        />
      </div>
      <p className="z-40 absolute bottom-0 left-[50%] translate-x-[-50%] text-2xl pointer-events-none">
        👋
      </p>
    </div>
  );
}

export default Picture;
