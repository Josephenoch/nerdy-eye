import React from 'react'

import ContactUsPicture from "../../Assets/Images/contact-us.png"
import { Button } from '../GeneralComponents/Button'
export const ContactUs = () => {
  const handleSubmit = (e) =>{
      e.preventDefault()
      //prevent the site from refreshing
  }
  return (
    <>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className="w-96 h-96 border-2 border-theme rounded-full flex items-end">
                <img src={ContactUsPicture} alt="Contact Us" className='w-[360px]'/>
            </div>
        </div>
        <form className="w-1/2 h-full p-24" onSubmit={(e)=>handleSubmit(e)}>
            <p className="text-2xl font-bold uppercase mb-4">Join the NerdyEye <span className="text-theme">Network</span></p>
            <p className="text-xs font-semibold mb-10"> Thank you for showing interest in the Nerdy Eye's Recruitment Program. Please fill the form below and we will connect you with your ideal employers as soon as possible.</p>
            <div className="pr-20 space-y-8">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="role" className="text-xs font-bold">Role <span className="text-theme">*</span></label>
                    <input type="text" name="" id="role" className="bg-[#f5f5f5] p-3 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="role" className="text-xs font-bold">Years of Experience <span className="text-theme">*</span></label>
                    <input type="text" name="" id="role" className="bg-[#f5f5f5] p-3 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="role" className="text-xs font-bold">Work Type <span className="text-theme">*</span></label>
                    <input type="text" name="" id="role" className="bg-[#f5f5f5] p-3 focus:outline-none" />
                </div>
                <Button text="Submit"/>
            </div>
        </form>
    </>
  )
}
