import React from 'react'

export const IndustryCard = ({industry}) => {
  return (
    <>
        <div className="group text-white flex flex-col justify-end px-6 w-[280px] h-[230px] hover:scale-105 bg-black/70 bg-cover rounded-2xl shadow-xl opacity-90 bg-blend-darken transition-all duration-500 ease-linear my-6 cursor-pointer" 
            style={{
                backgroundImage: `url(${industry.picture})`
            }}
        >
            <p className="font-bold mb-5 pr-5">{industry.title}</p>
            <span className="text-xs inline-block mb-5 opacity-0 h-0 group-hover:opacity-100 group-hover:h-fit transition-all duration-500 ease-linear">{industry.content}</span>
        </div>
    </>
  )
}
