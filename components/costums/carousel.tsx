'use client'

import { Carousel, Typography } from "@material-tailwind/react";
import { El_Messiri } from "next/font/google"
import Image from "next/image";

const messiri = El_Messiri({
  weight: '400',
  subsets: ['arabic'],
  display: 'swap'
})

export default function CarouselTransition() {
  return (
      <Carousel 
        transition={{ duration: 0.5}}
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
        <div className="relative h-full w-full">
          <div className="relative aspect-video w-full md:h-96 lg:h-[32rem] xl:h-[38rem]">
            <Image
              src="/porto/interior-b1.png"
              alt="hero image"
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-none object-right"
            />
          </div>
          <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className={`text-2xl md:text-4xl lg:text-5xl ${messiri.className} font-extralight tracking-widest mt-2 text-gray-200`}
              >
                Elegant Minimalist
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="relative aspect-video w-full md:h-96 lg:h-[32rem] xl:h-[38rem]">
            <Image
              src="/porto/the-forest-hill/61.png"
              alt="hero image"
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-none object-center"
            />
          </div>
          <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className={`text-2xl md:text-4xl lg:text-5xl ${messiri.className} font-extralight tracking-widest mt-2 text-gray-200`}
              >
                Modern Aesthethic
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="relative aspect-video w-full md:h-96 lg:h-[32rem] xl:h-[38rem]">
            <Image
              src="/porto/andromeda.png"
              alt="hero image"
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-none object-center"
            />
          </div>
          <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className={`text-2xl md:text-4xl lg:text-5xl ${messiri.className} font-extralight tracking-widest mt-2 text-gray-200`}
              >
                Residential Comfort
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
  );
}