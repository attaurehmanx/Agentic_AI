'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollToTopButton = () => {

    const [isVisible, setisVisible] = useState(false)
    useEffect(()=>{
        const toggle = () => {
            if (window.scrollY > 300) setisVisible(true)
            else setisVisible(false)
        }

        window.addEventListener("scroll",toggle)
        return () => window.removeEventListener("scroll",toggle)
    },[])

    const top = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='flex bottom-4 right-4 fixed z-50'>
        {isVisible && (
            <button className='bg-blue-950/80 flex items-center justify-center w-12 h-12 rounded-full text-white' onClick={top}> <FaArrowAltCircleUp /> </button>
        )}
      
    </div>
  )
}

export default ScrollToTopButton
