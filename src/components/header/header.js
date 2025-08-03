import React from 'react'
import './header.css'
import { FaBell } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";



export default function header() {
  return (
    <div className='header'>

      <div className='left-container'>
        <button className='darkMode'><MdDarkMode className='headerBtnIcon'></MdDarkMode></button>
        <button className='sound'><FaBell className='headerBtnIcon'></FaBell></button>
        <div className='headerContainerBtnInput'>
            <button className='searchInputBtn'>Search</button>
            <input placeholder='Search...' className='searchInput' type="text"></input>
        </div>
      </div>

      <div className='right-container'>
        <div className='headerProfileContainerTitle'><h3>kaveh khorshidi</h3><p>Developer</p></div>
        <img className='headerProfileImg' src="./profile.jpg" alt="" />
      </div>

    </div>
  )
}
