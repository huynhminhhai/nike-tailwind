import Button from '@/components/Button'
import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='padding'>
      <div className='max-container flex justify-center items-center flex-col gap-10' id='contact-us'>
        <h2 className='mt-2 font-palanquin text-4xl capitalize font-bold text-center'>
          Sign Up
          <span className='text-coral-red'> Updates </span>& Newsletter
        </h2>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type='text' placeholder='subscribe@nike.com' className='input' />
          <Button title='Sign up' />
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
