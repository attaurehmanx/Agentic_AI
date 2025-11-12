'use client'
import React from 'react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
// @ts-ignore
import 'react-multi-carousel/lib/styles.css'
import ClientCard from './ClientCard'

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const Client: React.FC = () => {
  return (
    <div className="container mx-auto text-white pt-20 pb-20">
      <h1 className="text-3xl font-bold mb-5 text-center">Our <span className='text-cyan-300 font-semibold'>Clients</span></h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots={false}
          arrows={true}
        >
          <ClientCard
    clientName="NovaTech Solutions"
    clientLogo="/images/c1.png"
    clientDescription="NovaTech Solutions collaborates with us to build scalable digital products that streamline their business operations."
  />

  <ClientCard
    clientName="BlueWave Media"
    clientLogo="/images/c2.png"
    clientDescription="BlueWave Media partnered with us to design modern UI/UX and improve their digital brand experience."
  />

  <ClientCard
    clientName="Stellar Finance Group"
    clientLogo="/images/c3.png"
    clientDescription="Stellar Finance Group trusted us for secure, enterprise-grade development solutions tailored to their clients’ needs."
  />

  <ClientCard
    clientName="UrbanEdge Creations"
    clientLogo="/images/c4.png"
    clientDescription="UrbanEdge Creations teamed up with us to build creative and visually engaging web experiences for their latest campaigns."
  />
        </Carousel>
      </div>
    </div>
  )
}

export default Client
