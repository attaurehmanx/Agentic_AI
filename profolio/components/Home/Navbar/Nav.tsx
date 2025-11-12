'use client'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/constant'
import { DownloadCloudIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void
  }

const Nav = ({openNav}: Props) => {

  const [navbg, setnavbg] = useState(false)

  useEffect(() => {
    const handler = ()=>{
      if (window.scrollY >= 90) setnavbg(true)
      if (window.scrollY < 90) setnavbg(false)
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  } , [ ])

  return (
    <div className={`transition-all ${navbg ? ' bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[8vh] z-10000 fixed w-full py-5 text-white `}>
      <div className='flex justify-between items-center w-[90%] mx-auto'>
        {/* logo */}
        <div className='flex items-center'>
          <div className='bg-white h-10 w-10 rounded-full flex items-center justify-center flex-col'>
            <FaCode className='text-black h-5 w-5' />
          </div>
          <h1 className='hidden sm:block ml-2 font-bold text-lg'>DevHub</h1>
        </div>

        {/* nav links */}
        <div>
          <ul className='hidden md:flex space-x-8 font-medium transition-colors '>
            {navLinks.map((link) => (
              <Link 
              key={link.id}
              href={link.path}
              className='text-base scroll-smooth  hover:text-cyan-300 text-white font-medium transition-all duration-200 '>{link.name}</Link>

            ))}

          </ul>
        </div>
        {/* button */}
        <div className='flex items-center '>
          <Button variant={"ghost"} className='text-lg bg-blue-800 hover:bg-blue-600 h10 '><DownloadCloudIcon /> Download cv</Button>
          {/* menu */}
          <HiBars3BottomRight onClick={openNav} className='md:hidden ml-4 h-8 w-8 cursor-pointer hover:text-cyan-300 transition-colors duration-200' />
        </div>

      </div>
    </div>
  )
}

export default Nav
