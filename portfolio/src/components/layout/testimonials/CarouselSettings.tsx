"use client";

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

function CarouselSettings({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full mx-auto max-w-md lg:max-w-7xl p-10 xl:p-0 text-center lg:mt-16 relative"
      >
        {children}
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="lg:hidden text-center text-sm text-foreground/50">
        Slide {current} of {count}
      </div>
    </div>
  );
}

export default CarouselSettings;
