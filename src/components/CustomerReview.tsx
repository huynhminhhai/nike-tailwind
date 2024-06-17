import { reviews } from '@/constants'
import Image from 'next/image'
import React from 'react'

type ReviewCardProps = {
  imgURL: string
  customerName: string
  rating: number
  feedback: string
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image src={imgURL} alt='review' width={120} height={120} className='object-cover rounded-full' />
      <h3 className='text-3xl font-bold text-center font-palanquin'>{customerName}</h3>
      <p className='mt-2 max-w-sm text-center font-montserrat text-slate-gray'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-3'>
        <Image src='/star.svg' alt='star' width={24} height={24} className='object-contain' />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
    </div>
  )
}

const CustomerReviewSection = () => {
  return (
    <section className='bg-pale-blue padding'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center font-montserrat text-slate-gray'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className='mt-24 max-sm:mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((item) => (
          <ReviewCard
            key={item.customerName}
            imgURL={item.imgURL}
            customerName={item.customerName}
            rating={item.rating}
            feedback={item.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviewSection
