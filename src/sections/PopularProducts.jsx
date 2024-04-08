import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section id="products" className='max-sm:mt-12 max-container'>
       <div className='flex flex-col gap-4 justify-start '>
        <h1 className='text-4xl font-bold font-palanquin leading-normal'>Our
          <span className='text-coral-red'> Nikey </span>
          Products
        </h1>
        <p className='font-montserrat text-slate-gray lg:max-w-lg'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
       </div>

       <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((product)=>(
          <PopularProductsCard key={product.name} {...product}/>
        ))}
       </div>
    </section>
  )
}

export default PopularProducts