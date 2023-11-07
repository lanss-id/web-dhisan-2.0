import { El_Messiri } from "next/font/google"
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
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{portofolios.map(portofolio => (
						<Link href={'/portofolio/' + portofolio.id} key={portofolio.id} className="">
							<img src={portofolio.image[0]} alt="portofolio" />
						</Link>
					))}
				</div>
		</section>
	);
}