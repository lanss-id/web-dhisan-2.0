import { El_Messiri } from "next/font/google"

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function AboutPage() {
	return (
		<section className='mt-12 space-y-6'>
				<h1 className={`${messiri.className} font-semibold text-2xl`}>
					Layanan Kami
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis atque earum?
				</p>
				<p>
					Lorem Lorem, ipsum. ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis atque earum?
				</p>
				<p>
					Lorem Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis atque earum?
				</p>
		</section>
	);
}