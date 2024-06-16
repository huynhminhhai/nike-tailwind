'use client'
import { RootState } from '@/store/app/global'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const BigShoeImage = () => {
  const bigShoeImage = useSelector((state: RootState) => state.global.bigShoeImage)

  return <Image src={bigShoeImage} alt='big shoe' width={610} height={500} className='object-contain relative z-10' />
}

export default BigShoeImage
