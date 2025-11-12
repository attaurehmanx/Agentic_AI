import { IconType } from 'react-icons'

interface ResumeI {
    Icons: IconType,
    role: string,
    date?: string
    des?: string
    }


const ResumeCard = ({Icons, role, date, des, }: ResumeI) => {

  return (
    <div className='mb-6'>
        <div className='flex gap-6 items-start bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md'>
            <div className='flex items-center justify-center flex-col bg-blue-950 rounded-full w-30 h-15'>
                <Icons className='text-white w-5 h-5 '/>
            </div>
            <div>
                {date && (
                    <h1 className='bg-white rounded-xl text-black text-center w-[50%] mb-1'>{date}</h1>
                )}
                <h1 className='text-white text-2xl mb-2 font-semibold'>{role}</h1>
                <p className='text-white'>{des}</p>
            </div>
        </div>
      
    </div>
  )
}

export default ResumeCard
