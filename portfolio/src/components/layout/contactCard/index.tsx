import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialIcons from "../navbar/SocialIcons";
import { Button } from "@/components/ui/button";
import PrefixedLink from "@/components/PrefixedLink";

function ContactCard() {
  const translations = useTranslations("Contact");
  return (
    <section className="relative w-full">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-60 -z-10 brightness-125"
      />
      <div className="max-w-4xl mx-auto text-center mt-36">
        <h2 className="text-header">{translations("title")}</h2>
        <div className="contact-card my-32">
          <div className="w-full flex flex-col gap-4 text-left">
            <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
              <div className="aspect-square w-24 rounded-full flex items-center justify-center bg-gradient-to-b from-[#383838] to-background-darker">
                <div className="aspect-square w-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#424242] to-background-darker">
                  <div className="aspect-square w-16 rounded-full flex items-center justify-center bg-gradient-to-b from-[#616161] to-background-darker overflow-hidden">
                    <Image
                      src="/avatars/avatar-3.png"
                      alt="@khairislama"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="image">{translations("available")}</div>
            </div>
            <h4 className="text-lg text-foreground font-semibold">
              {translations("hero")}
            </h4>
            <p className="text-lg">{translations("description")}</p>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="flex items-center justify-around w-2/3 mt-10 ">
              <SocialIcons />
            </div>
            <div className="mt-10">
              <Button
                size={"lg"}
                className="bg-gradient-to-r from-primary to-secondary text-foreground/80 font-rubik w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <PrefixedLink href="/contact">
                  {translations("call-to-action")}
                </PrefixedLink>
              </Button>
            </div>
          </div>
          <Image
            src="/shapes/contact-card.svg"
            alt="cool shape"
            width={128}
            height={291}
            className="absolute pointer-events-none -top-6 -right-0 brightness-125"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
