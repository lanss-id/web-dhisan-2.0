'use client'

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
 
export default function CarouselTransition() {
  return (
    <Carousel 
      transition={{ duration: 0.8}}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src='porto/forest-hill.png'
        alt="image 1"
        className="object-cover rounded-none w-screen aspect-video object-center md:h-96 lg:h-[32rem] xl:h-[38rem]"
      />
      <img
        src='porto/andromeda.png'
        alt="image 1"
        className="object-cover rounded-none w-screen aspect-video object-center md:h-96 lg:h-[32rem] xl:h-[38rem]"
      />
      <img
        src='porto/interior-b1.png'
        alt="image 1"
        className="object-cover rounded-none w-screen aspect-video object-center md:h-96 lg:h-[32rem] xl:h-[38rem]"
      />
    </Carousel>
  );
}