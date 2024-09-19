import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSettings from "./CarouselSettings";
import Image from "next/image";

function Testimonials() {
  return (
    <section>
      {" "}
      <CarouselSettings>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 p-1 mx-1 bg-gradient-to-b from-background to-[#373646] rounded-xl border border-[#373646]"
            >
              <div className="flex w-full h-80 flex-col items-center p-6 relative">
                <div className="aspect-square w-14 rounded-full overflow-hidden">
                  <Image
                    src="/khairi-slama-graduation.webp"
                    alt="@khairislama"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <h4 className="mt-4 text-foreground font-semibold">John Doe</h4>
                <p className="text-xs">CEO & Co-founder @Topico</p>
                <p className="mt-4">
                  It was great to work with Kevin on a UI redesign of our
                  product from A to Z. He is fast, accurate and expert on SaaS
                  topics. I recommend him!
                </p>
                <div className="absolute bottom-5">review</div>
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
