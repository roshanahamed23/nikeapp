import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'



const SpecialOffer = () => {
  return (
    <div className='flex lg:flex-row-reverse max-lg:flex-col gap-5 justify-between'>
      <div className='flex flex-1 justify-center flex-col gap-2'>
        <h3 className='font-palanquin font-bold text-4xl '>
        <span className='text-coral-red'>Special </span>
         Offer</h3>
        <p className='mt-4 info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='mt-4 info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. 
          Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-row gap-4 mt-6'>
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button 
          label='View Detail' 
          BackgroundColor='bg-white ' 
          BorderColor='border-slate-gray'
          TextColor='text-slate-gray'
          />
        </div>
      </div>
      <div className='flex-1'>
        <img
        src={offer}
        width={773}
        height={687}
        className='object-contain w-full'

        />
      </div>
    </div>
  )
}

export default SpecialOffer