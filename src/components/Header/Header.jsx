import React from 'react'
import ImgLogo from '../../assets/img/space-logo.png'
import ImgCart from '../../assets/img/cart.png'
import { NavMenu } from './NavMenu'


export const Header = () => {
    return (
        <div className="Header">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 col-md-11'>
                        <img className='Header-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-2 col-md-1 align-items-end'>
                        <img className='Header-cart' src={ImgCart} alt='Cart' />
                    </div>
                </div>
                <NavMenu/>
            </div>
        </div>
    )


}