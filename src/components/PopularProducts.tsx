import { products } from '@/constants'
import Image from 'next/image'
import React from 'react'

type PopularProductProps = {
  img: string
  name: string
  price: string
}

const PopularProductCard = ({ img, name, price }: PopularProductProps) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={img} alt='product' width={100} height={100} className='w-[100%] h-auto object-cover' />
      <div className='mt-6 max-sm:mt-4 flex justify-start gap-2.5'>
        <Image src='/star.svg' alt='star' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({(Math.random() * 0.5 + 4.5).toFixed(1)})
        </p>
      </div>
      <h3 className='mt-1 max-sm:mt-0 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-1 font-semibold font-montserrat text-coral-red text-base leading-normal'>{price}</p>
    </div>
  )
}

const PopularProductsSection = () => {
  return (
    <section id='products' className='padding border-2 border-red-500'>
      <div className='max-container border-2 border-green-500'>
        <div className='flex flex-col justify-start gap-5 max-sm:gap-2'>
          <h2 className='text-4xl font-palanquin font-bold'>
            Our <span className='text-coral-red'>Popular</span> Products
          </h2>
          <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            Experience top-noch quality and styles with our sought-after selections. Discover a world of comfort, design
            and value
          </p>
        </div>
        <div className='mt-16 max-sm:mt-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-14 sm:gap-4'>
          {products.map((item) => (
            <div key={item.name}>
              <PopularProductCard img={item.imgURL} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProductsSection
