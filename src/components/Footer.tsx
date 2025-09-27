import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
         <Link href="/" className='flex items-center tracking-wider'>
            <Image src="/logo.png" width={24} height={24} alt='Logo' className='w-6 h-6 md:w-9 md:h-9'/>
            <p className='hidden md:block text-md font-medium text-white'>E-college</p>
            </Link>
            <p className='text-sm text-gray-400'>&copy; <span className='text-sm text-gray-400'>{ new Date().getFullYear()}</span><span className='text-sm text-gray-400'>E-college</span></p>
            <p className='text-sm text-gray-400'>All right riserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Home</Link>
        <Link href="/">Contacts</Link>
        <Link href="/">Terms of services</Link>
        <Link href="/">Privacy policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sales</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
      
    </div>
  )
}
export default Footer
