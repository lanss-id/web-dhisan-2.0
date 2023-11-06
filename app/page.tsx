import { Button } from "@nextui-org/react"
import { El_Messiri } from "next/font/google"
import FormConsult from "@/components/costums/form"
import Carousel from '@/components/costums/carousel'

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function Index() {
  return (
	<div className="px-7">
		<section className="flex flex-col py-2 md:py-10 md:w-full">
			<div className="flex flex-wrap md:flex-nowrap justify-start md:justify-between">
				<h1 className={`text-5xl mt-4 font-semibold antialiased tracking-wider ${messiri.className}`}>Arsitek Developer Indonesia</h1>
				<div className="md:grid md:justify-items-end">
					<p className='w-3/4 mt-2 antialiased md:text-end md:text-lg'>Menawarkan keunggulan dalam proyek developer di indonesia.</p>
					<a href="#form" className="text-sm antialiased tracking-wide hover:text-black">
						<Button
							variant="bordered"
							color="primary"
							radius="none"
							className="mt-4 mb-6"
						>Konsultasi gratis</Button>
					</a>  
				</div>
			</div>
			<Carousel />
		</section>
		<section className='mt-10'>
			<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>
				Tentang Kami
			</h1>
			<p className="md:text-lg md:ml-72 md:indent-10 mt-6 md:mt-8">
				Kami adalah mitra terpercaya bagi para developer bangunan di Indonesia yang ingin menghadirkan proyek-proyek bangunan yang berkesan dan memukau. Sebagai sebuah studio arsitektur yang berdedikasi, kami memiliki visi untuk mengubah pandangan Anda tentang arsitektur. Kami menghadirkan inovasi dan kreativitas dalam setiap proyek, menciptakan desain yang tak hanya memikat, tetapi juga berfungsionalitas tinggi.
			</p>
			<p className="md:text-lg md:ml-72 md:indent-10 mt-4 md:mt-6">
				Dhisan Atelier didirikan dengan tujuan memberikan solusi arsitektur yang unik dan berkelanjutan untuk developer bangunan di seluruh Indonesia. Dengan lebih dari 5 tahun pengalaman dalam industri, kami telah berhasil mengeksekusi berbagai proyek yang berkualitas tinggi, dari hunian perumahan hingga kompleks komersial dan hunian vertikal. Kami memahami betapa pentingnya kepuasan pelanggan dalam setiap tahap proyek, dan itulah mengapa kami selalu berusaha keras untuk melampaui harapan Anda.
			</p>
		</section>
		<section className="mt-16 space-y-4">
			<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>Portofolio</h1>
			<div className="md:ml-72">
				<Carousel />
			</div>
		</section>
		<div className="mb-22 text-black" id='form'>.</div>
		<section className="mt-12">
			<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>Konsultasi</h1>
			<div className="mt-8">
				<div className=" md:pl-72">
					<FormConsult />
				</div>
			</div>
		</section>
	</div>
  )
}
