import React from 'react'

export const JobCard = ({icon, title, noOfJobs}) => {
  return (
    <div className='h-[250px] w-[270px] my-10 bg-[#f5f5f5] dark:bg-[#222222]/40 rounded-xl hover:bg-white hover:shadow-2xl cursor-pointer transition-all duration-700 ease-in-out pr-10  lg:pr-0 flex flex-col justify-between'>
        <div className="pt-10 h-[225px] w-[210px] lg:h-[70%] lg:w-[90%]">
            <img src={icon} alt="Phone" className="ml-auto h-[40px] lg:w-fit"/>
        </div>
        <div className="ml-5 mb-5">
            <p className="text-2xl font-bold ">{title}</p>
            <span className="text-sm font-bold text-theme">{noOfJobs} Jobs Available</span>
        </div>
    </div>
  )
}
