import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const SpecialOfferSection = () => {
  return (
    <section className='padding'>
      <div className='max-container flex items-center max-xl:flex-col-reverse gap-10'>
        <div className='flex-1'>
          <Image src='/offer.svg' alt='offer' width={773} height={687} className='object-contain w-full' />
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='mt-2 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span className='text-coral-red'>Special </span>
            Offers
          </h2>
          <p className='lg:max-w-lg mt-6 font-montserrat text-slate-gray'>
            Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections
            to incredible savings, we offer unparalleled value that sets us apart.
          </p>
          <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray'>
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest
            expectations. Your journey with us is nothing short of exceptional.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <Button title='Shop now' icon='arrow-right.svg' />
            <Button title='Learn more' bgColor='bg-white' textColor='text-slate-gray' borderColor='border-slate-gray' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOfferSection
