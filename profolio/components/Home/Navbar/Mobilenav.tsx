import { navLinks } from '@/data/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

interface MProps {
  shownav: boolean
  closeNav: () => void
}

const Mobilenav = ({shownav, closeNav}: MProps) => {

  const navopen = shownav ? 'translate-x-0' : 'translate-x-[100%]'

  return (
    <div >
      <div className={`fixed inset-0 transform transition-all ${navopen} duration-500 z-10000 w-full h-screen bg-black/70 opacity-70`}>
      </div>
      <div className={`flex flex-col justify-center ${navopen} fixed h-full transform transition-all duration-500 
      w-[80%] sm:w-[60%] delay-300 bg-white space-y-6 z-100050 right-0`}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.path} className='text-xl hover:text-cyan-800 text-black font-medium transition-all duration-200 ml-15 mb-14' onClick={closeNav}>{link.name}</Link>
        ))}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-6 w-10 h-10 text-black cursor-pointer' />
      </div>
      
    </div>
  )
}

export default Mobilenav
