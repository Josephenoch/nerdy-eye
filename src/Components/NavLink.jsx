import React from 'react'

export const NavLink = ({text}) => {
  return (
    <>
        <a href="/#" className="text-xs font-bold">{ text[0].toUpperCase() + text.substring(1)}</a> 
    </>
  )
}
