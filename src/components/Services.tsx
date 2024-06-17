import { services } from '@/constants'
import Image from 'next/image'
import React from 'react'

type ServiceCardProps = {
  imgURL: string
  label: string
  subtext: string
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-2 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
      <p className='mt-1 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>{subtext}</p>
    </div>
  )
}

const ServicesSection = () => {
  return (
    <section className='padding'>
      <div className='max-container flex max-lg:flex-col justify-center gap-9'>
        {services.map((item) => (
          <div key={item.label}>
            <ServiceCard imgURL={item.imgURL} label={item.label} subtext={item.subtext} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
