'use client'
import { shoes } from '@/constants'
import { RootState, setBigShoeImage } from '@/store/app/global'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

type ShoeCardProps = {
  shoe: {
    thumbnail: string
    bigShoe: string
  }
}

const ShoeCard = ({ shoe }: ShoeCardProps) => {
  const dispatch = useDispatch()

  const bigShoeImage = useSelector((state: RootState) => state.global.bigShoeImage)

  const handleClick = () => {
    if (bigShoeImage !== shoe.bigShoe) {
      dispatch(setBigShoeImage(shoe.bigShoe))
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === shoe.bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl p-4 max-sm:p-3 max-sm:w-[80px] max-sm:h-[80px] w-[120px] h-[120px]'>
        <Image src={shoe.thumbnail} alt='thumbnail' width={127} height={103} className='object-contain' />
      </div>
    </div>
  )
}

const ListShoeCard = () => {
  return (
    <div className='flex sm:gap-6 gap-4 absolute -bottom-[10%] max-sm:-bottom-[7%] left-[50%] translate-x-[-50%] max-sm:px-6'>
      {shoes.map((item) => (
        <div key={item.bigShoe}>
          <ShoeCard shoe={item} />
        </div>
      ))}
    </div>
  )
}

export default ListShoeCard
