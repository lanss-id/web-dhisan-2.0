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
					Blog
				</h1>
				<p>
					Halaman saat ini sedang di maintain, silahkan kembali ke halaman awal.					
				</p>
		</section>
	);
}