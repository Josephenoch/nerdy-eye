import React from 'react'
import Arrow from "../../Assets/Icons/arrow.svg"


export const HowItWorksItem = ({number, index}) => {
  return (
    <>
        {index!==0 && <img src={Arrow} alt="arrow" className="hidden lg:block mb-24 w-50 -ml-16 -mr-16"/>}

        <div className="w-[15%] flex flex-col items-center  space-y-3">
            <div className="w-[93px] h-[93px] rounded-full text-3xl font-bold bg-[#c4c4c4] text-[#3c3a3a] flex items-center justify-center">
                {number}
            </div>
            <p className="text-lg font-semibold">Title Goes Here</p>
            <span className="text-xs text-center inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit consequatur perspiciatis laudantium placeat </span>
        </div>
    </>
  )
}
