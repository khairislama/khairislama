import { MoonIcon } from "@/components/MoonIcon";
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
      <Link href="" className="hover:scale-105">
        <Image
          src="/icons/social/linkedin.svg"
          alt="github carthabot"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Link href="" className="hover:scale-105">
        <Image
          src="/icons/social/figma.svg"
          alt="github carthabot"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Link href="" className="hover:scale-105">
        <Image
          src="/icons/social/github.svg"
          alt="github carthabot"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <div className="w-9 h-9 p-1 rounded-full bg-foreground/50 cursor-not-allowed">
        <MoonIcon className="text-background" />
      </div>
    </div>
  );
}

export default SocialIcons;
