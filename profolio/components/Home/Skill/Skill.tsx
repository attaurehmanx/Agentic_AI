'use client'
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'
const skillsec = [
  {
    name: "javascript",
    icon: <SiJavascript/>,
    percentage: "70%"
  },
  {
    name: "React",
    icon: <SiReact/>,
    percentage: "60%"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs/>,
    percentage: "65%"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>,
    percentage: "80%"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript/>,
    percentage: "70%"
  }
]

const Skill = () => {
  return (
    <div className='text-white pt-20 pb-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-center text-white'>My <span className='text-cyan-300 font-semibold'>Skills</span></h1>
      <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {skillsec.map((skills, i)=>(
          <Tilt key={skills.name} scale={1.5} transitionSpeed={400} className='hover:z-10000'>
          <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} className='h-40 w-40 bg-[#14134145] rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-blue-600 hover:text-white  cursor-pointer transition-all'>
              <div className='text-4xl'>{skills.icon}</div>
              <h1>{skills.percentage}</h1>
              <h1>{skills.name}</h1>
          </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default Skill
