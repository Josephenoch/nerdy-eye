import React from 'react'

import { HowItWorksItem } from './HowItWorksItem'
export const HowItWorks = () => {
  const items = [1,2,3]
  return (
    <>
        <h1 className="text-2xl font-bold">How it Works</h1>
        <div className='w-full flex justify-center'>
            {
                items.map((item,index)=><HowItWorksItem key={index} number={item} index={index}/>)
            }
        </div>
    </>
  )
}
