import React from 'react'

import { HowItWorksItem } from './HowItWorksItem'
export const HowItWorks = () => {
  const items = [1,2,3]
  return (
    <>
        <h1 className="text-4xl text-textTheme lg:text-2xl font-bold mt-16 lg:mt-0">How it Works</h1>
        <div className='w-full flex lg:justify-center flex-col lg:flex-row'>
            {
                items.map((item,index)=><HowItWorksItem key={index} number={item} index={index}/>)
            }
        </div>
    </>
  )
}
