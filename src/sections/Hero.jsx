import React from 'react'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes,statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoesCard from '../components/ShoesCard';
import { useState } from 'react';
const Hero = () => {
  const [BigShoesImg,setBigShoesImg]=useState(bigShoe1)
  return (
    <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-coral'>Our New Collection</p>
        <h1 className='mt-10 font-bold text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[83px]'>
            <span className='xl:bg-white xl:whitespace-nowrap z-10 relative pr-10'>The New Arrival</span>
            <br/>
            <span className='incline-block text-coral-red'>Nike </span>
           Shoes
        </h1>
        <p className='font-montserrate text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label="Shop Now" iconURl={arrowRight}/>
        <div className='flex gap-12 justify-starts items-center mt-16 flex-wrap w-full'>
          {statistics.map((stat)=>(
            <div>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center bg-primary bg-center bg-cover bg-hero xl:min-h-screen max-xl:py-40'>
        <img
        src={BigShoesImg}
        alt='shoe collection'
        width={610}
        height={500}
        className='relative z-10 object-contain'
        />

        <div className='flex sm:gap-6 gap-4 absolute max-sm:-bottom-[5%] -bottom-[10%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <ShoesCard
            ImageUrl={shoe}
            changeToImage={(shoe)=>{setBigShoesImg(shoe)}}
            BigShoesImg={BigShoesImg}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero;