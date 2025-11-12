import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] grid grid-cols-1 xl:grid-cols-2 mx-auto gap-10'>
                {/* work div */}
                <div className='text-white'>
                    <h1 className='text-2xl md:text-4xl font-bold mb-2'>My Work <span className='text-cyan-300 font-semibold'>Experience</span></h1>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard
                            Icons={FaCodepen}
                            role='Full Stack Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.' />
                        <ResumeCard
                            Icons={FaReact}
                            role='Frontend Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.' />
                        <ResumeCard
                            Icons={BsDatabase}
                            role='Backend Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.' />
                    </div>
                </div>
                {/* education div  */}
                <div className='text-white'>
                    <h1 className='text-2xl md:text-4xl font-bold mb-2'>My <span className='text-cyan-300 font-semibold'>Education</span></h1>
                    <div data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                        <ResumeCard
                            Icons={BiBadge}
                            role='Frontend Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.' 
                            date='01-sept-2023' />
                        <ResumeCard
                            Icons={FaCodepen}
                            role='Frontend Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.' 
                            date='01-sept-2023' />
                        <ResumeCard
                            Icons={FaCodepen}
                            role='Frontend Developer'
                            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quae cumque saepe itaque eos sequi. Eius fugit culpa quaerat.'
                            date='01-sept-2023' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume
