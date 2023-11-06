import CarouselTransition from "@/components/costums/carousel";
import { El_Messiri } from "next/font/google"

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function AboutPage() {
	return (
		<section className='mt-8 px-7'>
			<CarouselTransition/>
			<h1 className={`${messiri.className} font-semibold text-2xl md:text-4xl mt-10`}>
				About us
			</h1>
			<p className="mt-4 text-start md:text-lg md:indent-6">
				Kami adalah mitra terpercaya bagi para developer bangunan di Indonesia yang ingin menghadirkan proyek-proyek bangunan yang berkesan dan memukau. Sebagai sebuah studio arsitektur yang berdedikasi, kami memiliki visi untuk mengubah pandangan Anda tentang arsitektur. Kami menghadirkan inovasi dan kreativitas dalam setiap proyek, menciptakan desain yang tak hanya memikat, tetapi juga berfungsionalitas tinggi.
			</p>
			<p className="md:text-lg text-start md:indent-6 mt-4 md:mt-6">
				Dhisan Atelier didirikan dengan tujuan memberikan solusi arsitektur yang unik dan berkelanjutan untuk developer bangunan di seluruh Indonesia. Dengan lebih dari 5 tahun pengalaman dalam industri, kami telah berhasil mengeksekusi berbagai proyek yang berkualitas tinggi, dari hunian perumahan hingga kompleks komersial dan hunian vertikal. Kami memahami betapa pentingnya kepuasan pelanggan dalam setiap tahap proyek, dan itulah mengapa kami selalu berusaha keras untuk melampaui harapan Anda.
			</p>
		</section>
	);
}