import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSettings from "./CarouselSettings";

function Testimonials() {
  return (
    <section>
      {" "}
      <CarouselSettings>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 p-1 bg-red-500 mx-1"
            >
              <div className="flex w-full h-44 items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
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
