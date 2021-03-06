import React from 'react'

import JoinPipelineImage from "../../Assets/Images/joinpipeline.png"
import TickIcon from "../../Assets/Icons/tick.svg"
import DarkTickIcon from "../../Assets/Icons/DarkIcons/darktick.svg"

import { Signature } from '../GeneralComponents/Signature'

export const JoinPipeline = () => {
  const benefits = [1,2,3,4,5]
  return (
      <>
      <div className="lg:hidden mb-16 -mt-16">
          <Signature/>
      </div>
        <div className="w-[100%] lg:w-4/5 flex h-full justify-center lg:justify-start ">
            <img src={JoinPipelineImage} alt="Join Pipeline" className="w-1/2 h-full rounded-l-xl hidden lg:block" />
            <div className="w-[90%] lg:w-1/2 h-full lg:p-16 pt-5 bg-[#f5f5f5] dark:bg-[#222222]/40  rounded-xl lg:rounded-l-none flex flex-col items-center lg:items-start justify-between pb-10 lg:pb-16">
                <p className="text-3xl font-bold mt-8 text-center lg:text-left ">Why You Should Join the <br/><span className="text-theme">Nerdeye Talent Pipeline</span> </p>
                <div className="w-full lg:block flex flex-col items-center lg:space-y-7 mt-10 ">
                    {
                        benefits.map(benefit=>
                            <div key={benefit} className="dark:bg-inherit dark:lg:bg-[#222222] lg:py-8 w-fit lg:w-full h-12 lg:bg-[#e8e8e8] rounded-2xl flex p-7 space-x-7 lg:space-x-5 items-center">
                                <div className="h-8 w-8 bg-[#c4c4c4] dark:bg-[#575757] rounded-full flex justify-center items-center">
                                    <img src={TickIcon} alt="Good" className="w-3 dark:hidden"/>
                                    <img src={DarkTickIcon} alt="Good" className="w-3 hidden dark:block"/>

                                </div>
                                <p className="text-sm font-semibold lg:font-bold">Long-Term Placements</p>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className="dark:bg-black w-full flex justify-center">
            <Signature/>
        </div>
    </>
  )
}
