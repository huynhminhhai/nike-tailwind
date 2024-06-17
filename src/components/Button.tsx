import Image from 'next/image'
import React from 'react'

type ButtonProps = {
  title: string
  icon?: string
  bgColor?: string
  textColor?: string
  borderColor?: string
}

const Button = ({
  title,
  icon,
  bgColor = 'bg-coral-red',
  textColor = 'text-white',
  borderColor = 'border-coral-red'
}: ButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full ${bgColor} ${textColor} ${borderColor}`}
    >
      {title} {icon && <Image src={icon} alt='icon' width={20} height={20} className='ml-2 rounded-full ' />}
    </button>
  )
}

export default Button
