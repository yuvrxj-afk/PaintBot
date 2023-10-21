import React, { useState } from 'react'
import {FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import "../App.css";
import { logo } from "../assets";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "dashboard",
            icon: <FaTh />,
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />,
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />,
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />,
        },
        
    ]
  return (
    <div className='container'>
        <div style = {{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <img src={logo} style={{display: isOpen ? "block" : "none"}} alt="" className='w-25 h-15  object-contain'/>

                <div style={{marginLeft: isOpen ? "40px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                 menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                )) 
            }
        </div>
            <main>{children}</main>
    </div>
  )
}

export default Sidebar