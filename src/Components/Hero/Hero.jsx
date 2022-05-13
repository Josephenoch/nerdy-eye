import React from 'react'
import { HeroLeft } from './HeroLeft'
import { HeroRight } from './HeroRight'
import { Switch } from "../GeneralComponents/Switch";

export const Hero = ({handleTheme}) => {
  return (
    <>

      <div className="w-full flex flex-col lg:flex-row justify-around dark:bg-black bg-white items-center h-[100%] relative z-10">
        
        <div className="w-4/5 flex flex-col lg:block items-center lg:w-[45%] mt-20 z-10 ">
            <HeroLeft/> 
        </div>
        <div className="w-4/5 lg:w-[35%] flex justify-center lg:block mt-10 lg:mt-20  z-10 pb-10 lg:pb-0">
            <HeroRight/>
        </div>
        <div className="absolute h-56 w-56 border-[32px] top-[52%] -right-10 lg:-top-10 lg:-right-10 lg:h-80 lg:w-80 rounded-full lg:border-[45px] border-[#E4E6EB] z-0 dark:border-[#222222]/40">

        </div>
        <div className="absolute -bottom-5  right-[60%] h-56 w-56 border-[32px]  lg:-bottom-20 lg:right-[450px] lg:h-80 lg:w-80 rounded-full lg:border-[45px] border-[#E4E6EB] z-0 dark:border-[#222222]/40">

        </div>
      </div>
      <div className="absolute right-5 bottom-10 z-20 ">
        <Switch clickEvent={handleTheme}/>
    </div>
  </>
  )
}
