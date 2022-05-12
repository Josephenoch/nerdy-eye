import React from 'react'

export const Button = ({text, addedClass, click, secondary}) => {
  return (
    <button className={`mt-6  transition-colors duration-500 ease-linear lg:text-xs p-4 rounded-md shadow-sm lg:font-medium text-lg font-semibold ${addedClass} ${secondary?"border-2 border-theme hover:border-textTheme text-text-theme":"bg-theme hover:bg-textTheme text-white" }`}
    onClick={click}  >
      {text}
    </button>
  )
}


