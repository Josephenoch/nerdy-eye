import React from 'react'
import { HeroLeft } from './HeroLeft'
import { HeroRight } from './HeroRight'

export const Hero = () => {
  return (

    <div className="w-full flex flex-col lg:flex-row justify-around bg-white items-center h-[100%] relative z-20">
        <div className="w-4/5 flex flex-col lg:block items-center lg:w-[45%] mt-20 ">
            <HeroLeft/> 
        </div>
        <div className="w-4/5 lg:w-[35%] flex justify-center lg:block mt-10 lg:mt-20 ">
            <HeroRight/>
        </div>
    </div>

  )
}
