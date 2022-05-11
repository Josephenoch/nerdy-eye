import React from 'react'

import LogoImage from "../../Assets/Images/nerdy-line-logo.png"

export const Logo = ({extraClass}) => {
  return (
    <img src={LogoImage} alt="Nerdy-Eye Logo" className={`w-[60px] ${extraClass}`}/>
  )
}
