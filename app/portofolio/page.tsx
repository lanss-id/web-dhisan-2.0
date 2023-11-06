import { El_Messiri } from "next/font/google"
import CarouselTransition from "@/components/costums/carousel";
import { portofolios } from "@/config/portofolios";
import Link from "next/link";

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function AboutPage() {
	return (
		<section className='mt-12 space-y-6'>

				<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>
					Portofolio Kami
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<CarouselTransition />
					<CarouselTransition />
					<CarouselTransition />
					<CarouselTransition />
					<CarouselTransition />
					<CarouselTransition />
					<CarouselTransition />
				</div>
				<div className="">
					{portofolios.map(portofolio => (
						<Link
						 href={'/portofolio/' + portofolio.id} 
						 key={portofolio.id}
						 >
							{portofolio.title}
						</Link>
					))}
				</div>
		</section>
	);
}