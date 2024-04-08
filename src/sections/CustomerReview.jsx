import React from 'react'
import CustomerCard from '../components/CustomerCard'
import { reviews } from '../constants'

const CustomerReview = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-palanquin font-bold text-4xl text-center '>
          What Our
          <span className='text-coral-red'> Customers </span>
          Say?
        </h3>
        <p className='mt-4 info-text md:max-w-lg text-center'>Hear genuine stories from our satisfied customers about their 
        exceptional experiences with us.</p>
      </div>
      <div className=' mt-20 flex max-md:flex-col flex-row gap-24 justify-center items-center'>
        {reviews.map((review)=>(
        <CustomerCard
        key={review.customerName}
        {...review}
        />
        ))}
      </div>
    </div>
  )
}

export default CustomerReview
