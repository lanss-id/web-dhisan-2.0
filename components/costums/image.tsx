import React from 'react'
import {Image} from "@nextui-org/image";

export const image = () => {
  return (
    <Image 
    className='object-cover rounded-none w-screen h-56 md:h-96'
    src='porto/forest-hill.png'
    alt="NextUI hero Image"
    radius='none'
    isBlurred
    />
  )
}

export const metaimg = () => {
  <Image
    src='metadata-og.png'
  />
}