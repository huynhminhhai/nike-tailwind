import BigShoeImage from '@/components/BigShoeImage'
import Button from '@/components/Button'
import ListShoeCard from '@/components/ListShoeCard'
import { statistics } from '@/constants'
import React, { useState } from 'react'

const HeroSection = () => {
  return (
    <section id='home' className='xl:padding-l xl:padding-r padding-b mt-1'>
      <div className='w-full flex max-xl:flex-col justify-center min-h-screen gap-10 max-container'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
          <p className='text:xl font-montserrat text-coral-red'>Our Summer Collection</p>
          <h1 className='mt-2 font-palanquin text-8xl max-sm:text-[75px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-8 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>
          <Button title='Show now' icon='/arrow-right.svg' />
          <div className='flex justify-start max-sm:justify-between items-start w-full mt-20 max-sm:mt-10 gap-16'>
            {statistics.map((item) => (
              <div key={item.label}>
                <p className='text-4xl font-palanquin font-bold max-sm:text-2xl'>{item.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-sm:pb-20 max-sm:pt-12 bg-primary bg-hero bg-cover bg-center'>
          <BigShoeImage />
          <ListShoeCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
