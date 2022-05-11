import React from 'react'

import MapIcon from "../../Assets/Icons/map-pin.svg"

export const AvailableJobsCard = ({job}) => {
  return (
    <div className="mr-10 w-[300px] h-[250px] rounded-lg bg-white shadow-lg">
        <div className="h-[70%] w-full border-b-[1px] border-b-textTheme/20 p-7 pr-2 space-y-5">
            <div className="flex items-center">
                <img src={job.icon} alt="Phone" className="inline-block mr-3 w-[17px]"/>
                <span className="font-bold">{job.jobCategory}</span>
            </div>
            <p className="text-2xl font-bold">{job.jobTitle}</p>
            <div className="">
                <div className="flex items-center ">
                    <img src={MapIcon} alt="Phone" className="inline-block mr-2"/>
                    <span className="font-bold text-sm mr-5">{job.location}</span>
                    <span className="text-theme font-semibold text-sm">{job.contractType}</span>
                </div>    
            </div>
        </div>
        <div className="w-full h-[30%] flex px-7 justify-between items-center">
            <span className="font-semibold">{job.org}</span>
            <img src={job.orgLogo} alt="Phone" className="inline-block w-[60px]"/>

        </div>
    </div>
  )
}
