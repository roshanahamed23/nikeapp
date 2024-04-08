import React from 'react'

const ShoesCard = ({ImageUrl,changeToImage,BigShoesImg}) => {

    const handleClick = ()=>{
        if(ImageUrl.bigShoe !== BigShoesImg){
            changeToImage(ImageUrl.bigShoe)
        }
    }


  return (
    <div className={`border-2 rounded-xl cursor-pointer 
    ${BigShoesImg===ImageUrl.bigShoe ? 'border-coral-red':'border-transparent'} max-sm:flex-1`}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-cover bg-center sm:h-40 sm:w-40 '>
            <img
            src={ImageUrl.thumbnail}
            alt='shoe card'
            width={123}
            height={103}
            />
        </div>
    </div>
  )
}

export default ShoesCard