import React from 'react'

import JohnDoePicture from "../../Assets/Images/john-doe.png"
import DaveMarkPicture from "../../Assets/Images/dave-mark.png"
import HelenWillsPicture from "../../Assets/Images/helen-wills.png"
import { Signature } from '../GeneralComponents/Signature'


export const SuccessStories = () => {
  return (
    <>
        <div className="w-[95%] flex flex-col items-center mb-16">
            <div className='w-1/2 flex flex-col items-center'>
                <h1 className="uppercase text-xl font-bold">
                    Success stories
                </h1>
                <p className="text-center text-xs mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, blanditiis eaque velit corrupti sed porro debitis incidunt esse voluptatum? Ea aut pariatur quidem ab quam iste rem impedit facere iusto.</p>
            </div>
            <div className="w-full flex justify-between mt-40">
                <div className="w-[29%] h-80 shadow-lg bg-[#f5f5f5] flex flex-col items-center p-7 justify-evenly">
                    <img src={DaveMarkPicture} alt="John Doe" className="w-24"/>
                    <p className="text-lg font-bold text-theme">Dave Mark</p>
                    <span className="text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil voluptatem quas voluptatibus? Amet quas cumque fuga distinctio doloremque minus numquam, odit repellat ipsum eos, quasi beatae, adipisci perferendis libero?</span>
                </div>
                <div className="w-[29%] h-80 shadow-2xl shadow-slate-600 scale-125 flex flex-col items-center p-7 justify-evenly">
                    <img src={JohnDoePicture} alt="John Doe" className="w-24"/>
                    <p className="text-lg font-bold text-theme">John Doe</p>
                    <span className="text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil voluptatem quas voluptatibus? Amet quas cumque fuga distinctio doloremque minus numquam, odit repellat ipsum eos, quasi beatae, adipisci perferendis libero?</span>
                </div>
                <div className="w-[29%] h-80 shadow-lg bg-[#f5f5f5] flex flex-col items-center p-7 justify-evenly">
                    <img src={HelenWillsPicture} alt="John Doe" className="w-24"/>
                    <p className="text-lg font-bold text-theme">Helen Wills</p>
                    <span className="text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil voluptatem quas voluptatibus? Amet quas cumque fuga distinctio doloremque minus numquam, odit repellat ipsum eos, quasi beatae, adipisci perferendis libero?</span>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-center mt-16 space-x-3">
            <div className='w-4 h-4 rounded-full bg-[#c4c4c4]'>
            </div>
            <div className='w-4 h-4 rounded-full border-2 border-[#c4c4c4]'>
            </div>
            <div className='w-4 h-4 rounded-full border-2 border-[#c4c4c4]'>
            </div>
        </div>
        <Signature/>
    </>
  )
}
