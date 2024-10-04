import { useTranslations } from "next-intl";
import ContactForm from "./Form";

function ContactWrapper() {
  const translations = useTranslations("About.contact");
  return (
    <section className="relative w-full px-4 sm:px-6 xl:px-0 mt-8 md:mt-20 mb-44 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-syne text-foreground tracking-wider mt-8 md:mt-16">
        {translations("title")}
      </h2>
      <div className="md:col-span-2 w-full">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactWrapper;
