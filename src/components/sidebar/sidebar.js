import './sidebar.css'
import { GoHomeFill } from "react-icons/go";
import { FaBasketShopping } from "react-icons/fa6";
import { BiSolidComment } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { NavLink } from 'react-router-dom';



export default function sidebar() {

  
  return (
    <div className='sidebar'>
    <div className='innerSidebar'>
      <h1 className='sidebarTitle'>Welcome to Sidebar</h1>
      <ol className='sidebar-container-links'>
        <li className="sidebarItem">
            <NavLink to='/' href="" className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Home<GoHomeFill className='sidebarItemIcon'></GoHomeFill></NavLink>
        </li>
        <li className="sidebarItem">
            <NavLink to='product'  className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Product<FaBasketShopping className='sidebarItemIcon'></FaBasketShopping></NavLink>
        </li>
        <li className="sidebarItem">
            <NavLink to='comment' href="" className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Comment<BiSolidComment className='sidebarItemIcon'></BiSolidComment></NavLink>
        </li>
        <li className="sidebarItem">
            <NavLink to='users' href="" className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Users<FaUsers className='sidebarItemIcon'></FaUsers></NavLink>
        </li>
        <li className="sidebarItem">
            <NavLink to='orders' href="" className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Orders<FaBoxOpen className='sidebarItemIcon'></FaBoxOpen></NavLink>
        </li>
        <li className="sidebarItem">
            <NavLink to='offs' href="" className={(isActive)=> isActive.isActive ? "activeBtnSidebar" : "sidebarItemLink"}>Discount<BiSolidDiscount className='sidebarItemIcon'></BiSolidDiscount></NavLink>
        </li>
      </ol>
    </div>
    </div>
  )
}
