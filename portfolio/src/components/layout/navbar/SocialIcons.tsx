import { MoonIcon } from "@/components/MoonIcon";
import Image from "next/image";
import Link from "next/link";

function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      <Link
        href="https://www.instagram.com/khairislama/"
        target="_blank"
        className="hover:scale-105"
      >
        <Image
          src="/icons/social/instagram.svg"
          alt="instagram khairi slama"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/khairi-slama/"
        target="_blank"
        className="hover:scale-105"
      >
        <Image
          src="/icons/social/linkedin.svg"
          alt="linkedin khairi slama"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Link
        href="https://www.facebook.com/khairi.slama/"
        target="_blank"
        className="hover:scale-105"
      >
        <Image
          src="/icons/social/facebook.svg"
          alt="facebook khairi slama"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <Link
        href="https://github.com/khairislama"
        target="_blank"
        className="hover:scale-105"
      >
        <Image
          src="/icons/social/github.svg"
          alt="github khairi slama"
          width={20}
          height={20}
          className="w-8"
        />
      </Link>
      <div className="w-9 h-9 p-1 rounded-full bg-foreground cursor-not-allowed">
        <MoonIcon className="text-background" />
      </div>
    </div>
  );
}

export default SocialIcons;
