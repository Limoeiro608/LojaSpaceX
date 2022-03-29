import React from 'react'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgPoint from '../../../assets/img/map-pointer.png'
import ImgMobile from '../../../assets/img/mobile.png'

export const Header = () => {

    return (
        <div className="Header">
            <div className='container'>
                <div className='row'>
                    <div className='col-11 text-center text-md-start'>
                        <img className='Header-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-1'>
                        <img className='Header-cart' src={ImgCart} alt='Cart' />
                    </div>
                </div>
                <nav>
                    <ul className='Header-nav' >
                        <div className='row'>
                            <div className=' col-md-3 '>
                                <div className='Header-nav__container Header-nav__first-child'>
                                    <li><img src={ImgPoint} alt='pointer' /><Link className="Header-nav__way" to='Home'>Informe seu<strong> CEP</strong></Link></li>
                                </div>
                            </div>
                            <div className='col-md-7 col-lg-5'>
                                <div className='Header-nav__container Header-nav__middle-child'>
                                    <li><Link className="Header-nav__way" to='Home'>Home</Link></li>
                                    <li><Link className="Header-nav__way" to='PDP'>Desafio PDP</Link></li>
                                    <li><Link className="Header-nav__way" to='PLP'>Desafio PLP</Link></li>
                                    <li><Link className="Header-nav__way" to='Content'>Desafio Weber Content</Link></li>
                                </div>
                            </div>
                            <div className='col-md-2 col-lg-4'>
                                <div className='Header-nav__container Header-nav__last-child'>
                                    <li><img src={ImgMobile} alt='mobile' /><Link className="Header-nav__way" to='Home'>Baixe o nosso App</Link></li>
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}