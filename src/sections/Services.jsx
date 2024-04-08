import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'


const Services = () => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-9'>
       {services.map((service)=>(
        <ServicesCard key={service.label} {...service} />
      ))}
    </div>
       
  )
}

export default Services