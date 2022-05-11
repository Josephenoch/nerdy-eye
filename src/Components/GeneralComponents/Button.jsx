import React from 'react'

export const Button = ({text}) => {
  return (
    <button className="bg-theme mt-6 text-white hover:bg-textTheme transition-colors duration-500 ease-linear text-xs p-4 rounded-md shadow-sm font-medium">
        {text}
    </button>
  )
}
