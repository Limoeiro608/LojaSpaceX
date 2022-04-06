import React from 'react'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import ImgMenu from '../../../assets/img/menu-mobile.png'

export const HeaderMobile = () => {

    return (
        <div className="HeaderMobile">
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <img className='HeaderMobile-cart' src={ImgCart} alt='Cart' />
                    </div>
                    <div className='col-10 text-center'>
                        <img className='HeaderMobile-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-1'>
                        <button className='HeaderMobile-menu'><img src={ImgMenu} alt='Menu' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}