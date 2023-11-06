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
	<>
		<div className="px-7">
		<section className="flex flex-col py-2 md:py-10 md:w-full">
			<div className="flex flex-wrap md:flex-nowrap justify-start md:justify-between">
				<h1 className={`text-5xl mt-4 font-semibold antialiased tracking-wider ${messiri.className}`}>Arsitek Developer Indonesia</h1>
				<div className="md:grid md:justify-items-end">
					<p className='w-3/4 mt-2 antialiased md:text-end'>Menawarkan keunggulan dalam proyek developer di indonesia.</p>
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
		<section className='mt-12 space-y-4'>
			<h1 className={`${messiri.className} font-semibold text-2xl`}>
				Tentang Kami
			</h1>
			<p>
				Kami adalah mitra terpercaya bagi para developer bangunan di Indonesia yang ingin menghadirkan proyek-proyek bangunan yang berkesan dan memukau. Sebagai sebuah studio arsitektur yang berdedikasi, kami memiliki visi untuk mengubah pandangan Anda tentang arsitektur. Kami menghadirkan inovasi dan kreativitas dalam setiap proyek, menciptakan desain yang tak hanya memikat, tetapi juga berfungsionalitas tinggi.
			</p>
		</section>
		<section className="mt-12 space-y-4">
			<h1 className={`${messiri.className} font-semibold text-2xl`}>Portofolio</h1>
			<Carousel />
		</section>
		<div className="mb-22 text-black" id='form'>.</div>
		<section className="mt-12 space-y-4">
			<h1 className={`${messiri.className} font-semibold text-2xl`}>Konsultasi</h1>
			<div>
				<FormConsult />
			</div>
		</section>
	</div>
	</>
  )
}
