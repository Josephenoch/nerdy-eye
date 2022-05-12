import React,{useState} from 'react'

import Moon from "../../Assets/Icons/DarkIcons/moon.svg"  
import Sun from "../../Assets/Icons/sun.svg"  


export const Switch = ({clickEvent}) => {
  const [active, setActive] = useState(false)
  const handleClick = () =>{
      setActive(prevState=>!prevState)
      clickEvent()
  }
  return (
    <label htmlFor="check" className="rotate-90 dark:bg-gray-100 bg-gray-700 w-10 h-5 block rounded-full relative cursor-pointer">
        <input type="checkbox" onChange={handleClick} checked={active} id="check" className="sr-only peer"/>
        <span className={`w-2/5 h-4/5 ${active ? "left-1":"right-1"} absolute rounded-full top-[1.5px]  transition-all duration-600 bg-cover rotate-180`} style={{
            background:active?`url(${Sun})`:`url(${Moon})`
        }}></span>
    </label>
  )
}
