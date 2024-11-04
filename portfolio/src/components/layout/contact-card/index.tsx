import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialIcons from "../navbar/SocialIcons";
import { Button } from "@/components/ui/button";
import PrefixedLink from "@/components/PrefixedLink";
import CardAvatar from "./CardAvatar";
import { Dot } from "lucide-react";

function ContactCard() {
  const translations = useTranslations("Contact");
  return (
    <section aria-labelledby="contact-card" className="relative w-full">
      <Image
        src="/shapes/eclipse-tiny.svg"
        alt="eclipse"
        width={1330}
        height={288}
        className="absolute object-cover w-full pointer-events-none -top-10 sm:-top-24 xl:-top-[45%] 2xl:-top-[70%] -z-10 brightness-125"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="max-w-4xl mx-auto text-center mt-36 p-4 sm:p-6 xl:p-0">
        <h2 id="contact-card" className="text-header">
          {translations("title")}
        </h2>
        <div className="contact-card my-32">
          <div className="w-full flex flex-col gap-4 text-left">
            <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
              <CardAvatar />
              <div className="pl-4 pr-12 py-3 rounded-full bg-foreground/10 flex items-center justify-center gap-2">
                <Dot className="text-green-500 h-8 w-8" />
                {translations("available")}
              </div>
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
                aria-label="let's create magic together"
                className="bg-gradient-to-r from-primary to-secondary text-foreground/80 font-rubik w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <PrefixedLink href="/about#contact-form">
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
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
