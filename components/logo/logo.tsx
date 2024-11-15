'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    <Link
    className='text-2xl font-extrabold text-gray-600 hidden md:block'
     href={'/'}>
        {/* Logo
        <Image
        alt='logo'
        className='hidden md:block cursor-pointer'
        height='100'
        width='100'
        src='/logo.png'
        /> */}
        VentBoard
    </Link>
  )
}

export default Logo