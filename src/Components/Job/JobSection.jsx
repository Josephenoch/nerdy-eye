import React from 'react'

import LeftIcon from "../../Assets/Icons/left.svg"
import PhoneIcon from "../../Assets/Icons/phone-dark.svg"
import ReactIcon from "../../Assets/Icons/react.svg"
import GraphicsIcon from "../../Assets/Icons/graphics.svg"
import TagsIcon from "../../Assets/Icons/tags.svg"





import { JobCard } from './JobCard'
import { AvailableJobs } from './AvailableJobs'
import { Signature } from '../GeneralComponents/Signature'

export const JobSection = () => {
  const jobs = [
      {
          title:"UI/UX Design",
          icon:PhoneIcon,
          noOfJobs:120
      },
      {
          title:"React Developer",
          icon:ReactIcon,
          noOfJobs:120
      },
      {
          title:"Graphics Design",
          icon:GraphicsIcon,
          noOfJobs:120
      },
      {
          title:"Developer",
          icon:TagsIcon,
          noOfJobs:120
      }
  ]
  return (
    <>
        <Signature/>
        <div className="flex flex-col items-center space-y-4 lg:space-y-2 mt-20 px-10 lg:px-0">
            <p className="font-bold text-4xl lg:text-2xl text-center lg:text-center ">WHO SHOULD JOIN THE <span className="text-theme lg:text-textTheme">NERDYEYE PIPELINE</span></p>
            <span className="text-xs font-semibold text-center lg:text-left text-textTheme">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente nulla neque aspernatur corrupti nobis.</span>
        </div>
        <div className="flex mt-16 items-center space-x-4">
            <div className="hidden lg:flex w-[115px] h-[115px] rounded-full items-center justify-center shadow-xl cursor-pointer">
                <img src={LeftIcon} alt="left arrow"/>
            </div>
            <div className="flex space-x-12 lg:space-x-8 overflow-x-auto lg:overflow-x-visible w-screen lg:w-fit pl-12 lg:pl-0">
                {jobs.map(job=><JobCard key={job.title} noOfJobs={job.noOfJobs} title={job.title} icon={job.icon}/>) }
            </div>
            <div className="hidden lg:flex w-[115px] h-[115px] rounded-full items-center justify-center shadow-xl cursor-pointer">
                <img src={LeftIcon} alt="left arrow" className="rotate-180"/>
            </div>
        </div>
        <Signature/>
        <p className="font-bold text-4xl lg:text-2xl mt-20 mb-10"><span className="text-theme lg:text-textTheme">JOB</span> OFFERS</p>
        <div className='w-[80%] relative flex mb-32 h-fit lg:h-[600px]'>
            <AvailableJobs/>
        </div>
        <Signature/>
    </>
  )
}
