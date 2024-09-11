import {
  Avatar as TheAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

function Avatar() {
  return (
    <TheAvatar className="absolute left-[50%] translate-x-[-50%]">
      <AvatarImage src="/avatars/Avatar-3.png" alt="@khairislama" />
      <AvatarFallback>KS</AvatarFallback>
    </TheAvatar>
  );
}

export default Avatar;
