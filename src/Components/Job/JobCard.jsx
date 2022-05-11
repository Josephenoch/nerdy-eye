import React from 'react'

export const JobCard = ({icon, title, noOfJobs}) => {
  return (
    <div className='h-[250px] w-[270px] bg-[#f5f5f5] rounded-xl hover:bg-white hover:shadow-2xl cursor-pointer transition-all duration-700 ease-in-out'>
        <div className="w-[90%] pt-10 h-[70%]">
            <img src={icon} alt="Phone" className="ml-auto"/>
        </div>
        <div className="ml-5">
            <p className="text-2xl font-bold ">{title}</p>
            <span className="text-sm font-bold text-theme">{noOfJobs} Jobs Available</span>
        </div>
    </div>
  )
}
