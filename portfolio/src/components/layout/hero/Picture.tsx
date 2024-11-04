import Image from "next/image";

function Picture() {
  return (
    <div className="relative w-48 h-48">
      <Image
        src="/hero/eclipse2.svg"
        alt="eclipse 2"
        width={154}
        height={154}
        className="absolute inset-0 z-10 pointer-events-none translate-x-5 translate-y-5"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/hero/eclipse1.svg"
        alt="eclipse 1"
        width={246}
        height={247}
        className="absolute inset-0 z-20 drop-shadow-2xl pointer-events-none"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <Image
        src="/hero/gradient.svg"
        alt="gradient"
        width={211}
        height={235}
        className="absolute inset-0 z-30 pointer-events-none"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="absolute z-40 inset-0 m-auto h-32 w-32 rounded-full border-2 border-border overlay-hidden">
        <Image
          src="/avatars/Avatar-1.webp"
          alt="avatar 1"
          width={358}
          height={289}
          className="object-cover rounded-full h-full"
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
