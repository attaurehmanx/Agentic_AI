import React from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='pt-20 pb-20'>
      <h1 className='text-2xl md:text-4xl mb-10 font-bold text-center text-white'>A small selection of recent Projects</h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='text-white'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <ProjectCard imageSrc='/images/p1.jpg' imageAlt='Project 1' title='Simple E-Commerce Dashboard' description='A simple e-commerce dashboard built with Next.js and Tailwind CSS.' />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
              <ProjectCard imageSrc='/images/p2.jpg' imageAlt='Project 2' title='Portfolio Website' description='A personal portfolio website built with Next.js and Tailwind CSS.' />
            </div>
        </div>
        <div className='text-white'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <ProjectCard imageSrc='/images/p3.jpg' imageAlt='Project 3' title='Brand Identity for Startup' description='Branding, UI/UX' />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
              <ProjectCard imageSrc='/images/p4.jpg' imageAlt='Project 4' title='SaaS Dashboard Development' description='App, UI/UX' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
