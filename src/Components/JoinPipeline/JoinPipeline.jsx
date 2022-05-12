import React from 'react'

import JoinPipelineImage from "../../Assets/Images/joinpipeline.png"
import TickIcon from "../../Assets/Icons/tick.svg"
import { Signature } from '../GeneralComponents/Signature'

export const JoinPipeline = () => {
  const benefits = [1,2,3,4,5]
  return (
      <>
      <div className="lg:hidden mb-16 -mt-16">
          <Signature/>
      </div>
        <div className="w-[90%] lg:w-4/5 flex h-full">
            <img src={JoinPipelineImage} alt="Join Pipeline" className="w-1/2 h-full rounded-l-xl hidden lg:block" />
            <div className="w-full lg:w-1/2 h-full p-5  lg:p-16 pt-5 bg-[#f5f5f5] rounded-xl lg:rounded-l-none flex flex-col justify-between">
                <p className="text-3xl font-bold mt-8 lg:mt-16 text-center lg:text-left ">Why You Should Join the <br/><span className="text-theme">Nerdeye Talent Pipeline</span> </p>
                <div className="w-full lg:block flex flex-col items-center lg:space-y-10 mt-10 lg:mt-0">
                    {
                        benefits.map(benefit=>
                            <div key={benefit} className=" w-3/4 lg:w-full h-12 lg:bg-[#e8e8e8] rounded-2xl flex p-7 space-x-5 items-center">
                                <div className="h-8 w-8 bg-[#c4c4c4] rounded-full flex justify-center align center">
                                    <img src={TickIcon} alt="Good" className="w-3"/>
                                </div>
                                <p className="text-sm font-bold">Long-Term Placements</p>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <Signature/>
    </>
  )
}
