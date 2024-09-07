import { useTranslations } from "next-intl";

export default function Home() {
  const translations = useTranslations("Navbar");
  return (
    <div className="flex flex-col">
      <div className="h-96 bg-red-200 w-full"> {translations("home")} </div>
      <div className="h-96 bg-green-200 w-full"></div>
    </div>
  );
}
