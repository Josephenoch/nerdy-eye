import React from 'react'
import LogisticsPicture from "../../Assets/Images/logistics.jpg"
import FintechPicture from "../../Assets/Images/fintech.png"
import EcommercePicture from "../../Assets/Images/ecommerce.png"
import HospitalityPicture from "../../Assets/Images/hospitality.png"
import MediaPicture from "../../Assets/Images/media.png"
import HealthCarePicture from "../../Assets/Images/healthcare.png"
import { IndustryCard } from './IndustryCard'

export const Industries = () => {
  const industries = [
    {
        picture:LogisticsPicture,
        title:"Logistics & Transportation",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    },
    {
        picture:FintechPicture,
        title:"Fintech",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    },
    {
        picture:EcommercePicture,
        title:"E-Commerce",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    },
    {
        picture:HospitalityPicture,
        title:"Hospitality",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    },
    {
        picture:MediaPicture,
        title:"Media",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    },
    {
        picture:HealthCarePicture,
        title:"Health Care",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio iusto nisi blanditiis voluptatum, nulla mollitia."
    }
  ]
  return (
    <>
        <div className="w-1/2 lg:w-1/3 flex flex-col items-center space-y-7 lg:space-y-3 mt-5">
            <p className="uppercase font-bold text-2xl text-center lg:hidden">Industries We <span className="text-theme">Hire</span> For</p>
            <p className="uppercase font-bold text-lg hidden lg:block">Browse by <span className="text-theme">industries</span></p>
            <p className='text-xs text-center font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti praesentium harum perspiciatis ea eum sunt sint, reprehenderit</p>
        </div>
        <div className="flex lg:flex-wrap flex-col mt-10 lg:mt-0 lg:flex-row w-full lg:w-[70%] lg:justify-between items-center lg:items-start">
            {
                industries.map((industry, index)=><IndustryCard key={index} industry={industry}/>)
            }
        </div>
    </>
  )
}
