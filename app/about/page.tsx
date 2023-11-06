import CarouselTransition from "@/components/costums/carousel";
import { El_Messiri } from "next/font/google"

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function AboutPage() {
	return (
		<section className='mt-12 space-y-6'>
			<CarouselTransition/>
			<h1 className={`${messiri.className} font-semibold text-2xl`}>
				About us
			</h1>
			<p>
				Kami adalah mitra terpercaya bagi para developer bangunan di Indonesia yang ingin menghadirkan proyek-proyek bangunan yang berkesan dan memukau. Sebagai sebuah studio arsitektur yang berdedikasi, kami memiliki visi untuk mengubah pandangan Anda tentang arsitektur. Kami menghadirkan inovasi dan kreativitas dalam setiap proyek, menciptakan desain yang tak hanya memikat, tetapi juga berfungsionalitas tinggi.
			</p>
		</section>
	);
}