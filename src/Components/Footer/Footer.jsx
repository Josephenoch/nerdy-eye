import React from 'react'

import { Logo } from '../GeneralComponents/Logo'
import MapIcon from "../../Assets/Icons/map-solid.svg"
import MailIcon from "../../Assets/Icons/mail.svg"
import PhoneIcon from "../../Assets/Icons/call.svg"

import InstagramIcon from "../../Assets/Icons/instagram.svg"
import TwitterIcon from "../../Assets/Icons/twitter.svg"
import LinkedInIcon from "../../Assets/Icons/linkedin.svg"
import YoutubeIcon from "../../Assets/Icons/youtube.svg"




export const Footer = () => {
  return (
    <>
        <div className='w-full px-8 lg:px-16 py-10 h-[95%] flex flex-col justify-between'>
            <div>
                <Logo/>
            </div>
            <div className="h-[35%] w-full flex flex-col lg:flex-row lg:justify-between mb-10 space-y-10 lg:space-y-0">
                <div className="space-y-4 mt-10 lg:mt-0 lg:w-1/3 w-full">
                    <p className="font-bold">Contact</p>
                    <span className="text-xs font-semibold text-body inline-block">We build and teach tech and digital solutions</span>
                    <div className="text-xs font-bold text-body flex items-center">
                        <img src={MapIcon} alt="Map" className="inline-block mr-4"/>
                        <span>4 Ishola Alagomeji, off Hebert Macaulay, Yaba Lagos</span>
                    </div>
                    <div className="text-xs font-bold text-body flex items-center">
                        <img src={MailIcon} alt="Map" className="inline-block mr-4"/>
                        <span>info@nerdyeye.com</span>
                    </div>
                    <div className="text-xs font-bold text-body flex items-center">
                        <img src={PhoneIcon} alt="Map" className="inline-block mr-4"/>
                        <span>+234 812 724 4042</span>
                    </div>
                </div>
                <div className="lg:w-1/5 space-y-4 w-full">
                    <p className="font-bold">Services</p>
                    <p className="text-xs font-semibold text-body">Website Design/Development</p>
                    <p className="text-xs font-semibold text-body">Mobile App Development</p>
                    <p className="text-xs font-semibold text-body">Digital Marketing Campaign and Management</p>

                </div>
                <div className="lg:w-1/5 space-y-4 w-full">
                    <p className="font-bold">Courses</p>
                    <p className="text-xs font-semibold text-body">Digital Marketing Training</p>
                    <p className="text-xs font-semibold text-body">Graphics Design Trainingt</p>
                    <p className="text-xs font-semibold text-body">UI/UX Training</p>
                    <p className="text-xs font-semibold text-body">Front-end Website Development</p>
                    <p className="text-xs font-semibold text-body">Full-stack Web And Mobile Development</p>
                </div>
            </div>
            <div className="h-[35%] w-full flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0">
                <div className=" space-y-4 lg:w-1/3 w-full">
                    <p className="font-bold">Company</p>
                    <p className="text-xs font-semibold text-body">About</p>
                    <p className="text-xs font-semibold text-body">Work Force</p>
                    <p className="text-xs font-semibold text-body">Contact</p>
                    <p className="text-xs font-semibold text-body">Blog</p>
                </div>
                <div className=" space-y-4 lg:w-1/5 w-full">
                    <p className="font-bold">Other Links</p>
                    <p className="text-xs font-semibold text-body">Careers</p>
                    <p className="text-xs font-semibold text-body">Site Map</p>
                    <p className="text-xs font-semibold text-body">Privacy</p>
                    <p className="text-xs font-semibold text-body">Terms</p>
                </div>
                <div className=" space-y-4 lg:w-1/5 w-full">
                    <p className="font-bold">Social Media</p>
                    <div className="space-x-4">
                        <img src={InstagramIcon} alt="Instagram" className="inline-block"/>
                        <img src={TwitterIcon} alt="Twitter" className="inline-block"/>
                        <img src={LinkedInIcon} alt="LinkedIn" className="inline-block"/>
                        <img src={YoutubeIcon} alt="Youtube" className="inline-block"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[5%] w-full bg-theme text-white px-0 lg:px-16">
            <span className="text-xs text-center w-full inline-block lg:inline lg:text-left">All Rights Reserved Nerdy Eye Powered By Dungada Tech Ltd.</span>
        </div>
    </>
  )
}
