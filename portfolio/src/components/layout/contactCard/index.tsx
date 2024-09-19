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
        className="absolute object-cover w-full pointer-events-none -top-60 -z-10 brightness-125"
      />
      <div className="max-w-4xl mx-auto text-center mt-36">
        <h2 className="text-header">{translations("title")}</h2>
        <div className="contact-card my-32">
          <div className="w-full flex flex-col gap-4 text-left">
            <div className="flex items-center justify-start gap-6">
              <div className="image">image</div>
              <div className="image">Available for work</div>
            </div>
            <h4>Drop me a line or say 👋 on social networks</h4>
            <p>
              Whether you re a design team in need of support or an early-stage
              company looking to level up your design,I d love to talk about
              your project 💜
            </p>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="icons">icons</div>
            <div className="icons">Button</div>
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
