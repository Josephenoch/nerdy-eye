import React from 'react'

import LogoIcon from "../../Assets/Icons/logo.svg"
import DarkLogoIcon from "../../Assets/Icons/DarkIcons/darklogo.svg"


export const Logo = ({extraClass}) => {
  return (
    <>
    <img src={LogoIcon} alt="Nerdy-Eye Logo" className={`w-[60px] dark:hidden ${extraClass}`}/>
    <img src={DarkLogoIcon} alt="Nerdy-Eye Logo" className={`w-[60px] hidden dark:block ${extraClass}`}/>
    </>
  )
}
