import Image from "next/image";
import Link from "next/link";

function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      <Link href="" className="hover:scale-105">
        <Image
          src="/icons/social/instagram.svg"
          alt="instagram carthabot"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Image
        src="/icons/social/linkedin.svg"
        alt="github carthabot"
        width={20}
        height={20}
        className="w-8"
      />
      <Image
        src="/icons/social/figma.svg"
        alt="github carthabot"
        width={20}
        height={20}
        className="w-8"
      />
      <Image
        src="/icons/social/github.svg"
        alt="github carthabot"
        width={20}
        height={20}
        className="w-8"
      />
      <Image
        src="/icons/social/github.svg"
        alt="github carthabot"
        width={20}
        height={20}
        className="w-8"
      />
    </div>
  );
}

export default SocialIcons;
