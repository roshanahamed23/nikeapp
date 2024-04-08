import React from 'react'

const ServicesCard = ({imgURL, label, subtext }) => {
  return (
    <div className='flex-1 w-full sm:min-w-[350px] sm:w-[350px] rounded-[20px] shadow-xl px-10 py-16'>
        <div className="rounded-full bg-coral-red w-11 h-11 flex justify-center items-center">
            <img
            src={imgURL}
            height={24}
            width={24}
            />
        </div>
        <h3 className='mt-2 font-palanquin text-xl font-bold leading-normal'>{label}</h3>
        <p className='font-montserrat text-lg text-slate-gray mt-2'>{subtext}</p>
    </div>
  )
}

export default ServicesCard
