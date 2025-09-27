import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SeachBar from './SeachBar'
import { Home, Bell, ShoppingCart } from 'lucide-react'
    
    const NavBar = () => {
      return (
        <div className='w-full flex items-center justify-between border-b border-gray-300 pb-4'>
            {/* Logo */}  
            <Link href="/" className='flex items-center tracking-wider'>
            <Image src="/logo.png" width={24} height={24} alt='Logo' className='w-6 h-6 md:w-9 md:h-9'/>
            <p className='hidden md:block text-md font-medium'>E-college</p>
            </Link>
            {/* right side */}
            <div className='flex items-center gap-6'>
                <SeachBar/>
                <Link href="/"><Home className='w-4 h-4 text-grey-600'/></Link>
                <Link href="/"><Bell className='w-4 h-4 text-grey-600'/></Link>
                <Link href="/"><ShoppingCart className='w-4 h-4 text-grey-600'/></Link>
                <Link href="/login">Get started</Link>
            </div>
        </div>
      )
    }
    export default  NavBar
    