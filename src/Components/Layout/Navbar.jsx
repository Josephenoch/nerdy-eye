import React from 'react'
import Logo from "../../Assets/Images/nerdy-line-logo.png"
import Cart from "../../Assets/Images/Icon-eather-shopping-cart.svg"
import UserAvatar from "../../Assets/Images/user-avatar.svg"
import DropDown from "../../Assets/Images/angle-down.svg"
import { NavLink } from './NavLink'



export const Navbar = () => {
  const navlinks = ["services", "academy", "community", "workforce", "store", "affliate"]
  return (
    <nav className=" bg-white w-full h-[10%] flex justify-between items-center relative z-10">
        <img src={Logo} alt="Nerdy-Eye Logo" className="w-[60px] ml-10"/>
        <div className='absolute w-1 h-1 p-[270px] mx-auto left-0 right-[110px] rounded-full border-2 border-gray-900 z-0 top-[-100px]'></div>
        
        <div className=" space-x-5 flex">
            {
                navlinks.map((link,index)=> <NavLink key={index} text={link}/>)
            } 
        </div>
        <div className='flex items-center'>
            <img src={Cart} alt="Cart" className="mr-6 w-[20px]"/>
            <div className='flex items-center space-x-3 mr-10'>
                <img src={UserAvatar} alt="User Avatar" className="w-[15px]"/>
                <span className="text-xs font-bold">My Account</span>
                <img src={DropDown} alt="User Avatar" className="w-[15px]"/>
            </div>
        </div>
    </nav>
  )
}
