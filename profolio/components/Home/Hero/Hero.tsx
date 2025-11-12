'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs'
import ParticlesHero from './particles'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-screen text-white overflow-hidden '>
      <ParticlesHero />
      <div className='relative z-10 flex flex-col items-center justify-center md:mt-20'>
        <Image
          src="/images/WhatsApp Image 2025-08-12 at 19.23.53_09efdce3.jpg"
          alt="Logo"
          width={250}
          height={250}
          className="rounded-full border-8 border-[#0c0c48aa] h-60 w-60 md:h-100 md:w-100  object-cover"
          // data-aos="fade-up"
        />
        <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl md:text-5xl font-bold mt-6'>Creating web products, <br /> brands, <span className='text-cyan-300'>and experiences</span></h1>
        <h2 data-aos="fade-up" data-aos-delay="400" className='mt-4 font-bold text-xl max-w-xl text-center'>
          Hi! I'm Atta-Ur-Rehman - A passionate
          <span className='text-cyan-300'> <Typewriter options={
            {
              strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50
            }} /> </span>
        </h2>
        <Link
          href="#projects" >
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className='mt-6 h-15 w-48 bg-cyan-300 text-black rounded-full inline-flex items-center justify-center gap-1 font-semibold cursor-pointer'>
            See my work
            <BsArrowRight
              className='mt-0.5' />
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Hero


