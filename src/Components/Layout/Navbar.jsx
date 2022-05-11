import React from 'react'
import Cart from "../../Assets/Icons/Icon-eather-shopping-cart.svg"
import UserAvatar from "../../Assets/Icons/user-avatar.svg"
import DropDown from "../../Assets/Icons/angle-down.svg"
import { NavLink } from './NavLink'
import { Logo } from '../GeneralComponents/Logo'



export const Navbar = () => {
  const navlinks = ["services", "academy", "community", "workforce", "store", "affliate"]
  return (
    <nav className=" bg-white w-full h-[10%] flex justify-between items-center z-20 fixed top-0">
        <Logo extraClass="ml-10"/>
        <div className=" space-x-5 flex z-20 relative">
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
