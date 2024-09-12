import Image from "next/image";

function Picture() {
  return (
    <div className="relative w-48 h-48">
      <Image
        src="/hero/eclipse2.svg"
        alt="eclipse 2"
        width={200}
        height={200}
        className="absolute inset-0 z-10 backdrop-blur-sm object-cover pointer-events-none"
      />
      <Image
        src="/hero/eclipse1.svg"
        alt="eclipse 1"
        width={384}
        height={384}
        className="absolute inset-0 z-20 drop-shadow-2xl backdrop-blur-sm pointer-events-none"
      />
      <Image
        src="/hero/gradient.svg"
        alt="gradient"
        width={196}
        height={196}
        className="absolute inset-0 z-30 pointer-events-none"
      />
      <div className="absolute z-40 inset-0 m-auto h-32 w-32 rounded-full border-2 border-border overlay-hidden">
        <Image
          src="/avatars/Avatar-1.png"
          alt="eclipse"
          width={358}
          height={289}
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <p className="z-40 absolute bottom-0 left-[50%] translate-x-[-50%] text-2xl">
        👋
      </p>
    </div>
  );
}

export default Picture;
