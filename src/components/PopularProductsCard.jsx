import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-col items-start w-full max-sm:w-full'>
        <img
        src={imgURL}
        className='w-[282px] h-[282px]'
        />
        <div className='mt-8 flex gap-2'>
            <img
            src={star}
            width={20}
            height={20}
            />
            <p className='font-montserrat text-slate-gray text-xl leading-normal'>(4.5)</p>
        </div>
        <h3 className='mt-2 font-palanquin font-semibold text-2xl leading-normal'>{name}</h3>
        <p className='mt-2 font-montserrat text-slate-gray leading-normal text-2xl font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductsCard