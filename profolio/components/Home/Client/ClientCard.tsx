import React from 'react'
import Image from 'next/image'

interface ClientCardProps {
  clientName: string
  clientLogo: string
  clientDescription?: string
}

const ClientCard: React.FC<ClientCardProps> = ({
  clientLogo,
  clientName,
  clientDescription,
}) => {
  return (
    <div className="text-white flex flex-col items-center text-center bg-[#0f0f24] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      
      {/* Logo */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <Image
          src={clientLogo}
          alt={clientName}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Description (Optional) */}
      {clientDescription && (
        <p className="text-gray-300 text-sm leading-relaxed mb-3 text-balance">
          {clientDescription}
        </p>
      )}

      {/* Name */}
      <h2 className="text-lg font-semibold">{clientName}</h2>
    </div>
  )
}

export default ClientCard
