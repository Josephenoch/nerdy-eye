import React from 'react'
import { HeroLeft } from './HeroLeft'
import { HeroRight } from './HeroRight'

export const Hero = () => {
  return (

    <div className="w-full flex justify-around bg-white items-center h-[100%] relative z-20">
        <div className="w-[45%] mt-20 ">
            <HeroLeft/> 
        </div>
        <div className="w-[35%] mt-20 ">
            <HeroRight/>
        </div>
    </div>

  )
}
