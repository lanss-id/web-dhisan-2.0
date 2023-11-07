import React from 'react'
import { portofolios } from '@/config/portofolios'
import { El_Messiri } from 'next/font/google';

const messiri = El_Messiri({
	weight: '400',
	subsets: ['arabic'],
	display: 'swap'
})

export default function page({ params }: {params: {id:string}}) { 
    const idNumber = Number(params.id);
    const detailPorto = portofolios.find(portofolio => idNumber === portofolio.id);
    console.log('detailPorto:', detailPorto);
  
    return (
      <>
          <div className={`${messiri.className} text-3xl font-semibold`}>
              Detail portofolio {detailPorto?.title} 
          </div>
          {detailPorto && 
             <p className='my-4'>{detailPorto.description}</p>
          }
          {detailPorto && 
             <p className='mb-6'>years: {detailPorto.year}</p>
          }
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {detailPorto?.image?.map(img => (
                <img key={img} src={img}/>
              ))
              }
          </div>
      </>
    )
}

  