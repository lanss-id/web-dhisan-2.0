import { El_Messiri } from "next/font/google"
import { portofolios } from "@/config/portofolios";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default async function AboutPage() {
	const supabase = createClient(cookies())
	const {data: portofolio, error} = await supabase
											.from('portofolio')
											.select(`*, images (*)`)
	return (
		<section className='mt-12 space-y-6'>
				<h1 className={`${messiri.className} font-semibold text-3xl md:text-4xl`}>
					Portofolio Kami
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{portofolio?.map((item) => (
						<Link href={'/portofolio/' + item.id} key={item.id}>
							{item.images.length > 0 && (
								<div className="relative aspect-video w-full md:h-56">
									<Image
									src={item.images[0].url_image}
									alt="Image Portofolio"
									layout="fill"
									objectFit="cover"
									className="object-cover rounded-none object-right"
									/>
								</div>
							)}
							<p className="text-white">{item.name}</p>
						</Link>
					))}
				</div>
		</section>
	);
}