import React from 'react'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { El_Messiri } from 'next/font/google';
import Image from 'next/image';

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default async function page({ params }: {params: {id:string}}) { 
  const supabase = createClient(cookies())
	const {data: portofolio} = await supabase
											.from('portofolio')
											.select(`*, images (*)`)
                      .eq('id', params.id)
  const detailPorto = (portofolio || [])[0]; 
  return (
    <>
        <div className={`${messiri.className} text-3xl font-semibold`}>
            Detail portofolio {detailPorto?.name} 
        </div>
        {detailPorto && 
            <p className='my-4'>{detailPorto.description}</p>
        }
        {detailPorto && 
            <p className='mb-6'>years: {detailPorto.year}</p>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {detailPorto?.images?.map((image: {id:number, url_image:string}) => (
            <div key={image.id} className="relative aspect-video w-full h-72 md:h-64">
              <Image
                src={image.url_image}
                alt="Image Portofolio"
                layout="fill"
                objectFit="cover"
                className="object-cover rounded-none object-right"
              />
            </div>
          ))}
        </div>
    </>
  )
}

  