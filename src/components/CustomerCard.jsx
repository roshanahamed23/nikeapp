import React from 'react'
import { star } from '../assets/icons'

const CustomerCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
        <img
        src={imgURL}
        alt='profile photo'
        className='rounded-full w-[120px] h-[120px]'
        />
        <p className='font-montserrat text-slate-gray text-center text-md mt-3 max-w-sm'>{feedback}</p>
        <div className='flex gap-2 justify-center items-center'>
            <img src={star} alt="star" width={22} height={22} className='object-contain m-0' />
            <p className='font-montserrat text-slate-gray text-center text-lg'>({rating})</p>
        </div>
        <h3 className='text-2xl font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default CustomerCard