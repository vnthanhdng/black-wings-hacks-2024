import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Inter, EB_Garamond, Merriweather, Alegreya_Sans_SC} from 'next/font/google'
import Logo from "../public/logo.png"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4'>
          <Link href="/" >
          <Image src={Logo} alt='Logo' width={50} height={50} />
          </Link>
        <Link href='/' className= 'nav-link'>
        Home
        </Link>
        <Link href='/health' className='nav-link'>
        Health
        </Link>
        <Link href='/hygiene' className='nav-link'>
        Hygiene
        </Link>
        <Link href='/makeup' className='nav-link'>
        Makeup
        </Link>
        <Link href='/sexEd' className='nav-link'>
        SexEd
        </Link>
        <Link href='/fashion' className='nav-link'>
        Fashion
        </Link>
        </div>
    </nav>
  )
}

export default Navbar;