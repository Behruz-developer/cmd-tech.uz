import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { SlMenu } from 'react-icons/sl';
import { RiCloseLargeLine } from "react-icons/ri";


const Nav = () => {
    const [active, setActive] = useState(false)

    return (
        <div className='nav'>
            <div className="container">
                <div className="nav_box">
                    <div className="nav_card">
                        <a href="#!" className="nav_logo">
                            <img src={logo} alt="" />
                        </a>
                        <ul className={` nav_list nav_list2 ${active && "active"}`}>
                            <RiCloseLargeLine className='nav_close'  onClick={() => setActive(false)}/>
                            <li><a href="#!" className='nav_link'>Все проекты</a></li>
                            <li><a href="#!" className='nav_link'>Телеграм-боты</a></li>
                            <li><a href="#!" className='nav_link'>Веб-сайты</a></li>
                            <a href='#!' className="nav_link link1">
                                Звонок
                            </a>
                        </ul>
                    </div>

                    <a href='#!' className="nav_link link">
                        Звонок
                    </a>
                    <SlMenu className='nav_menu' onClick={() => setActive(true)}/>
                </div>
            </div>
        </div>
    )
}

export default Nav
