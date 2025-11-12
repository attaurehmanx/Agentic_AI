// import React from 'react'
// import Image from 'next/image'

// interface ProjectCardProps {
//   imageSrc: string;
//   imageAlt: string;
//   title: string;
//   description: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, title, description }) => {
//   return (
//     <div>
//       <Image src={imageSrc} alt={imageAlt} width={500} height={500} className='rounded-lg' />
//       <h2 className='text-xl font-bold'>{title}</h2>
//       <p className='text-gray-600'>{description}</p>
//     </div>
//   )
// }


// export default ProjectCard


import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="bg-[#0f0f24] p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  )
}

export default ProjectCard
