import Image from "next/image";

function RecommendedProjects() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-3">
        <div className="flex items-end gap-2 md:gap-4">
          <Image
            src="/shapes/arrow-left.svg"
            alt="Previous"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            Previous work
          </p>
        </div>
        <div className="flex items-start gap-2 md:gap-4">
          <p className="font-semibold font-rubik text-sm md:text-lg text-foreground/90 uppercase">
            Next work
          </p>
          <Image
            src="/shapes/arrow-right.svg"
            alt="Next"
            width={50}
            height={13}
            className="w-8 md:w-14"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-syne font-semibold tracking-wider text-center mt-4">
        Other Projects
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-10">
        <div className="flex flex-col overflow-hidden relative">
          <Image
            src="/projects/carthabot/hero.webp"
            alt="cool shape"
            width={1866}
            height={912}
            className="rounded-xl"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <div className="w-full mt-4 ml-2">
            <h3 className="font-semibold font-syne text-foreground/90">
              Logo project 1
            </h3>
            <p className="">Branding</p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <Image
            src="/projects/carthabot/hero.webp"
            alt="cool shape"
            width={1866}
            height={912}
            className="rounded-xl"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <div className="w-full mt-4 ml-2">
            <h3 className="font-semibold font-syne text-foreground/90">
              Logo project 2
            </h3>
            <p className="">Branding</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col overflow-hidden">
          <Image
            src="/projects/carthabot/hero.webp"
            alt="cool shape"
            width={1866}
            height={912}
            className="rounded-xl"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <div className="w-full mt-4 ml-2">
            <h3 className="font-semibold font-syne text-foreground/90">
              Logo project 3
            </h3>
            <p className="">Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedProjects;
