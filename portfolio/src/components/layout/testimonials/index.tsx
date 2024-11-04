import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSettings from "./CarouselSettings";
import Image from "next/image";
import Link from "next/link";

const Testimonials_ARRAY = [
  {
    name: "Yassine Bayoudh",
    job: "Software Engineer | ASP.NET Core & Angular",
    message:
      "Working with Khairi was a fantastic experience. His expertise in both backend and frontend development, paired with his supportive, positive approach, made him an invaluable teammate. I genuinely appreciated his professionalism and his commitment to delivering quality work.",
    link: "https://www.linkedin.com/in/yassinebayoudh/",
    image: "yassine-bayoudh",
  },
  {
    name: "Mhamed Alila",
    job: "Architect & Digital Fabricator | Computational Designer",
    message:
      "Khairi is a highly skilled Next.js web developer with a remarkable focus on performance. Our recent development showcases his expertise and dedication to creating optimized, fast-loading web applications. Working with him on various projects, I've seen firsthand his commitment to quality and innovation.",
    link: "https://www.linkedin.com/in/alilamhamed/",
    image: "mhamed-alila",
  },
  {
    name: "Samer Jawadi",
    job: "Testbench Developer at Hutchinson",
    message:
      "I highly recommend Khair as a backend developer. He brings technical expertise, problem-solving skills, and a proactive approach to optimizing systems. His collaborative spirit and dedication to quality make him a valuable asset to any team.",
    link: "https://www.linkedin.com/in/samer-jawadi/",
    image: "samer-jawadi",
  },
  {
    name: "Ayoub Kallel",
    job: "Software Developer at Hutchinson",
    message:
      "Highly recommend khayri Slema! An exceptional backend developer with a strong focus on security, he consistently delivers robust, secure solutions. His recent portfolio showcases impressive expertise in safeguarding data and optimizing backend efficiency. A dedicated professional and a pleasure to work with!",
    link: "https://www.linkedin.com/in/kallel-ayoub-9b803018a/",
    image: "ayoub-kallel",
  },
];

function Testimonials() {
  return (
    <section>
      {" "}
      <CarouselSettings>
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 p-1 mx-1 bg-gradient-to-b from-background to-[#373646] rounded-xl border border-[#373646]"
            >
              <div className="flex w-full h-[450px] sm:h-[420px] lg:h-[450px] xl:h-[420px] flex-col items-center p-6 relative">
                <div className="aspect-square w-14 rounded-full overflow-hidden">
                  <Image
                    src={`/${Testimonials_ARRAY[index].image}.webp`}
                    alt={Testimonials_ARRAY[index].name}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <h4 className="mt-4 text-foreground font-semibold">
                  {Testimonials_ARRAY[index].name}
                </h4>
                <p className="text-xs">{Testimonials_ARRAY[index].job}</p>
                <p className="mt-4">{Testimonials_ARRAY[index].message}</p>
                <Link
                  aria-label={`about ${Testimonials_ARRAY[index].name}`}
                  href={Testimonials_ARRAY[index].link}
                  target="_blank"
                  className="absolute bottom-5"
                >
                  review
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </CarouselSettings>
    </section>
  );
}

export default Testimonials;
