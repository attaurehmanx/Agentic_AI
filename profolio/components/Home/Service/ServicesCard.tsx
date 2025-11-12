import Image from 'next/image'

interface ServicesCardProps {
    name: string,
    description: string,
    icons: string
}

const ServicesCard = ({name, description, icons}: ServicesCardProps) => {
  return (
    <div className='bg-[#0f142ed9] rounded-lg p-5 flex flex-col items-center text-center h-full'>
      <Image src={icons} alt={name} width={60} height={60}/>
      <h2 className='text-white mt-6 text-2xl font-bold'>{name}</h2>
      <p className='text-white mt-6 text-lg'>{description}</p>
    </div>
  )
}

export default ServicesCard
