import { useTranslations } from "next-intl";
import Image from "next/image";

function ContactCard() {
  const translations = useTranslations("Contact");
  return (
    <section className="relative w-full">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none top-0 -z-10 brightness-125"
      />
      <div className="max-w-4xl mx-auto text-center my-36">
        <h2 className="text-header">{translations("title")}</h2>
      </div>
    </section>
  );
}

export default ContactCard;
