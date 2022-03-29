import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import ImgMenu from '../../../assets/img/menu-mobile.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgPoint from '../../../assets/img/map-pointer.png'
import ImgMobile from '../../../assets/img/mobile.png'

export const HeaderMobile = () => {

    const useClick = (el, initialState) => {
        const [isActive, setIsActive] = useState(initialState)

        useEffect(() => {
            const onClick = e => {
                if (el.current !== null && !el.current.contains(e.target)) {
                    setIsActive(!isActive)
                }
            }

            if (isActive) {
                window.addEventListener('click', onClick)
            }

            return () => {
                window.removeEventListener('click', onClick)
            }

        }, [isActive, el])

        return [isActive, setIsActive]
    }

    const dropDown = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

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
                        <button onClick={onClick} className='HeaderMobile-menu'><img src={ImgMenu} alt='Menu' /></button>
                    </div>
                </div>
                <nav ref={dropDown} className={`Header-nav ${isActive ? "active" : "inactive"}`}>
                    <ul className='row' >
                        <div className='col'>
                            <div>
                                <div className='Header-nav__container Header-nav__first-child'>
                                    <li><img src={ImgPoint} alt='pointer' /><Link className="Header-nav__way" to='Home'>Informe seu<strong> CEP</strong></Link></li>
                                </div>
                            </div>
                            <div>
                                <div className='Header-nav__container Header-nav__middle-child'>
                                    <li><Link className="Header-nav__way" to='Home'>Home</Link></li>
                                    <li><Link className="Header-nav__way" to='PDP'>Desafio PDP</Link></li>
                                    <li><Link className="Header-nav__way" to='PLP'>Desafio PLP</Link></li>
                                    <li><Link className="Header-nav__way" to='Content'>Desafio Weber Content</Link></li>
                                </div>
                            </div>
                            <div>
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