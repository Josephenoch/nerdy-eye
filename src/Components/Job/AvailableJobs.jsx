import React from 'react'
import JobImage from "../../Assets/Images/job-image.png"
import { AvailableJobsCard } from './AvailableJobsCard'

import PhoneIcon from "../../Assets/Icons/phone.svg"
import TagsIcon from "../../Assets/Icons/tags.svg"
import ReactIcon from "../../Assets/Icons/react.svg"
import MetaLogo from "../../Assets/Icons/metalogo.svg"
import AppleLogo from "../../Assets/Icons/apple-logo.svg"
import AmazonLogo from "../../Assets/Icons/amazon-logo.svg"



export const AvailableJobs = () => {
  const availableJobs=[
    {
        icon:PhoneIcon,
        jobCategory:"Design",
        jobTitle:"UX Researcher",
        location:"Lagos",
        contractType:"Full TIme",
        org:"Meta",
        orgLogo:MetaLogo
    },
    {
        icon:TagsIcon,
        jobCategory:"Web Development",
        jobTitle:"Frontend developer",
        location:"Lagos",
        contractType:"Full TIme",
        org:"Amazon",
        orgLogo:AmazonLogo
    },
    {
        icon:ReactIcon,
        jobCategory:"Design",
        jobTitle:"React Js Developer",
        location:"Lagos",
        contractType:"Full TIme",
        org:"Meta",
        orgLogo:MetaLogo
    },
    {
        icon:PhoneIcon,
        jobCategory:"Design",
        jobTitle:"UI/UX Designer",
        location:"Lagos",
        contractType:"Full TIme",
        org:"Meta",
        orgLogo:MetaLogo
    },
    {
        icon:PhoneIcon,
        jobCategory:"Design",
        jobTitle:"UI Designer",
        location:"Lagos",
        contractType:"Full TIme",
        org:"Apple",
        orgLogo:AppleLogo
    },
    
  ]
  return (
    <>
        <div className="w-1/2 rounded-l-xl flex space-x-20 h-4/5 bg-[#e4e6e8] p-16 pl-20 ">
            <div>
                <p className="text-5xl font-bold">500<span className="text-theme">+</span></p>
                <span className="mt-2 inline-block font-semibold text-sm">Job Offers</span>
            </div>
            <div>
                <p className="text-5xl font-bold">100<span className="text-theme">+</span></p>
                <span className="mt-2 inline-block font-semibold text-sm">Startups</span>
            </div>

            <div className="left-0 top-44 absolute space-y-5 flex flex-wrap-reverse w-full">
                {availableJobs.map((job,index)=>
                    <AvailableJobsCard 
                        key={index}
                        job={job}
                    />
                )}
               
            </div>
        </div>
        <img src={JobImage} alt="Job" className='w-1/2 rounded-r-xl rounded'/>
    </>
  )
}
