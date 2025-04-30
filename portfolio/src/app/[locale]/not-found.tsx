import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-background gap-4 h-screen">
      <h1 className="font-semibold text-7xl">404</h1>
      <p className="font-semibold text-foreground/70 text-2xl">
        {" "}
        Please try returning home
      </p>
      <Link href="/">Return home</Link>
    </div>
  );
}
