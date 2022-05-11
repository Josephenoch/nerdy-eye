import React from 'react'

import LeftIcon from "../../Assets/Icons/left.svg"
import SignatureImage from "../../Assets/Icons/signature-image.svg"
import PhoneIcon from "../../Assets/Icons/phone-dark.svg"
import ReactIcon from "../../Assets/Icons/react.svg"
import GraphicsIcon from "../../Assets/Icons/graphics.svg"
import TagsIcon from "../../Assets/Icons/tags.svg"





import { JobCard } from './JobCard'
import { AvailableJobs } from './AvailableJobs'

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
        <img src={SignatureImage} alt="Signature" className="mt-16"/>
        <div className="flex flex-col items-center space-y-2 mt-20">
            <p className="font-bold text-2xl">WHO SHOULD JOIN THE NERDYEYE PIPELINE</p>
            <span className="text-xs font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente nulla neque aspernatur corrupti nobis.</span>
        </div>
        <div className="flex mt-16 items-center space-x-4">
            <div className="w-[115px] h-[115px] rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                <img src={LeftIcon} alt="left arrow"/>
            </div>
            <div className="flex space-x-8">
                {jobs.map(job=><JobCard key={job.title} noOfJobs={job.noOfJobs} title={job.title} icon={job.icon}/>) }
            </div>
            <div className="w-[115px] h-[115px] rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                <img src={LeftIcon} alt="left arrow" className="rotate-180"/>
            </div>
        </div>
        <img src={SignatureImage} alt="Signature" className="mt-16"/>
        <p className="font-bold text-2xl mt-20 mb-10">JOB OFFERS</p>
        <div className='w-[80%] relative h-[600px] flex'>
            <AvailableJobs/>
        </div>

    </>
  )
}
