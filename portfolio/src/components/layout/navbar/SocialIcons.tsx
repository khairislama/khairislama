import Image from "next/image";

function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      <Image
        src="/icons/social/instagram.svg"
        alt="instagram carthabot"
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
