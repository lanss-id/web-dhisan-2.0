import { El_Messiri } from "next/font/google"
import FormConsult from "@/components/costums/form";

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function AboutPage() {
	return (
		<section className='mt-12 space-y-6'>
				<h1 className={`${messiri.className} font-semibold text-2xl text-center`}>
					Kontak Kami
				</h1>
				<p className="text-center">
					Kontak melalui tombol link dibawah ini, jika anda ingin konsultasi mengenai keluhan atau masalah desail silahkan mengisi form berikut
				</p>
				<FormConsult />
		</section>
	);
}