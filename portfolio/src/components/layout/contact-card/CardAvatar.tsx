import Image from "next/image";

export const runtime = "edge";

function CardAvatar() {
  return (
    <div className="aspect-square w-24 rounded-full flex items-center justify-center bg-gradient-to-b from-[#383838] to-background-darker">
      <div className="aspect-square w-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#424242] to-background-darker">
        <div className="aspect-square w-16 rounded-full flex items-center justify-center bg-gradient-to-b from-[#616161] to-background-darker overflow-hidden">
          <Image
            src="/avatars/Avatar-2.png"
            alt="@khairislama"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CardAvatar;
