import React from 'react'
import ImgLogo from '../../assets/img/space-logo.png'
import ImgCart from '../../assets/img/cart.png'
import ImgPoint from '../../assets/img/map-pointer.png'
import ImgMobile from '../../assets/img/mobile.png'
import { Navbar } from './Navbar'


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
                <ul className='Header-nav'>
                    <div className='row'>
                        <div className=' col-md-3 '>
                            <div className='Header-nav__div Header-nav__first-child'>
                                <img src={ImgPoint} alt='pointer' /><Navbar href='#' nome='Informe seu CEP' />
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-3'>
                            <div className='Header-nav__div Header-nav__middle-child'>
                                <Navbar href='#' nome='Home' />
                                <Navbar href='#' nome='Desafio PDP' />
                                <Navbar href='#' nome='Desafio PLP' />
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-6'>
                            <div className='Header-nav__div Header-nav__last-child'>
                                <img src={ImgMobile} alt='mobile' /><Navbar href='#' nome='Baixe o nosso App' />
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )


}