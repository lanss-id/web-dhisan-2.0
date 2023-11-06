import React from 'react'
import { portofolios } from '@/config/portofolios'
import { El_Messiri } from 'next/font/google';
import Image from 'next/image';
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
              this is a detail portofolio {detailPorto?.title}
          </div>
          <div className="">
              {detailPorto && 
                <img src={detailPorto.image} alt="portofolio" />
              }
              {detailPorto && 
                  <p>{detailPorto.description}</p>
              }
              {detailPorto && 
                  <p>years: {detailPorto.year}</p>
              }
          </div>
      </>
    )
}

  