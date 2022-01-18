import React from 'react'
import ImgLogo from '../../assets/img/space-logo.png'
import ImgCart from '../../assets/img/cart.png'

export const Header = () =>{
    return (
        <div className="Header">
            <img className='Header__logo' src={ImgLogo} alt='logo'/>
            <img className='Header__cart' src={ImgCart} alt='Cart'/>
        </div>
    )  

   
}