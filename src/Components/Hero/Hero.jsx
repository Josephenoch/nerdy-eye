import React from 'react'
import { HeroLeft } from './HeroLeft'
import { HeroRight } from './HeroRight'
import { Switch } from "../GeneralComponents/Switch";

export const Hero = ({handleTheme}) => {
  return (
    <>

      <div className="w-full flex flex-col lg:flex-row justify-around dark:bg-black bg-white items-center h-[100%]">
          <div className="w-4/5 flex flex-col lg:block items-center lg:w-[45%] mt-20 ">
              <HeroLeft/> 
          </div>
          <div className="w-4/5 lg:w-[35%] flex justify-center lg:block mt-10 lg:mt-20 ">
              <HeroRight/>
          </div>
      </div>
      <div className="absolute right-0 top-[70%] ">
        <Switch clickEvent={handleTheme}/>
    </div>
  </>
  )
}
