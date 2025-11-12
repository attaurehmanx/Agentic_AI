import React from 'react'
import Image from 'next/image'

type BlogCardProps = {
  imageSrc: string
  title: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="bg-[#0f0f24] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={500} 
          height={300} 
          className="rounded-lg hover:scale-105 transition-all duration-300"
        />
      </div>

      <h1 className="text-lg md:text-xl font-semibold mt-4">{title}</h1>

      <p className="text-gray-400 text-sm mt-1">1 Sept 2025</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="bg-blue-950 px-4 py-1.5 text-sm rounded-full font-bold text-white">React</span>
        <span className="bg-blue-950 px-4 py-1.5 text-sm rounded-full font-bold text-white">Next.js</span>
        <span className="bg-blue-950 px-4 py-1.5 text-sm rounded-full font-bold text-white">Tailwind CSS</span>
      </div>
    </div>
  )
}

export default BlogCard
