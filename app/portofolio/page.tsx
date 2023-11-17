'use client'
import { El_Messiri } from "next/font/google"
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Typography } from "@material-tailwind/react";

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default async function AboutPage() {
	const supabase = createClient()
	const {data: portofolio} = await supabase
									.from('portofolio')
									.select(`*, images (*)`)
	return (
		<section className='mt-12 space-y-6'>
			<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>
				Portofolio Kami
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{portofolio?.map((item) => (
					<Link href={'/portofolio/' + item.id} key={item.id}>
						{item.images.length > 0 && (
							<div className="relative h-full w-full">
							<div className="relative aspect-video w-full md:h-64 ">
								<Image
									as={NextImage}
									width={1260}
									height={720}
									isBlurred
									src={item.images[0].url_image}
									alt={'Image Portofolio' + item.name}
									radius="none"
									className="absolute w-full h-72 md:h-64 object-cover"
								/>
							</div>
							<div className="absolute inset-0 z-10 h-full w-full flex items-center justify-center bg-black/60">
								<div className="w-3/4 text-center md:w-2/4">
								<Typography
									variant="h1"
									color="white"
									className={`text-lg md:text-2xl ${messiri.className} font-extralight tracking-widest mt-2 text-gray-200`}
								>
									{item.name}
								</Typography>
								</div>
							</div>
							</div>
						)}
					</Link>
				))}
			</div>
		</section>
	);
}