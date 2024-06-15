import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href={'/'}>
          <Image src='/header-logo.svg' alt='heder logo' width={130} height={29} />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Image className='hidden max-lg:block ' src='/hamburger.svg' alt='humburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Header
