import React from 'react'

export const Button = ({text, addedClass}) => {
  return (
    <button className={`bg-theme mt-6 text-white hover:bg-textTheme transition-colors duration-500 ease-linear lg:text-xs p-4 rounded-md shadow-sm lg:font-medium text-lg font-semibold ${addedClass}`}>
        {text}
    </button>
  )
}
