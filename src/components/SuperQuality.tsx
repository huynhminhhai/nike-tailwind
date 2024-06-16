import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const SuperQualitySection = () => {
  return (
    <section id='about-us' className='padding'>
      <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
          <h2 className='mt-2 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We provide you
            <span className='text-coral-red'> Super </span>
            <span className='text-coral-red'>Quality </span>
            Shoes
          </h2>
          <p className='lg:max-w-lg mt-6 font-montserrat text-slate-gray'>
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your
            experience, providing you with unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className='mt-8'>
            <Button title='View details' icon='arrow-right.svg' />
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <Image src='/shoe8.svg' alt='shoe' width={570} height={522} className='object-contain' />
        </div>
      </div>
    </section>
  )
}

export default SuperQualitySection
