import React from 'react'
import logo from '../../assets/images/logo2.svg'
import upcoming from '../../assets/images/upcoming.png'

const Loading = () => {
    return (
        <div className='box'>
            <img className='box_img2' src={upcoming} alt="" />
            <span class="loader"></span>
            <img className='box_img' src={logo} alt="" />
        </div>
    )
}

export default Loading
