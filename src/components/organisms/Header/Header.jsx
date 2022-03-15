import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import ImgMenu from '../../../assets/img/menu-mobile.png'
import { NavMenu } from './NavMenu/NavMenu'
import MediaQuery from 'react-responsive'

export const Header = () => {

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
        <div className="Header">
            <div className='container'>
                <div className='row'>
                    <div className='col-1 d-md-none'>
                        <img className='Header-cart' src={ImgCart} alt='Cart' />
                    </div>
                    <div className='col-10 col-md-11 text-center text-md-start'>
                        <img className='Header-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-1 col-md-1 '>
                        <div className='d-none d-md-block'>
                            <img className='Header-cart' src={ImgCart} alt='Cart' />
                        </div>
                        <MediaQuery maxWidth={750}>
                            <div>
                                <button onClick={onClick} className='Header-menuMobile'><img src={ImgMenu} alt='Menu' /></button>
                            </div>
                        </MediaQuery>
                    </div>
                </div>
                <nav ref={dropDown} className={`${isActive ? "active" : "inactive"}`}>
                    <NavMenu />
                </nav>
            </div>
        </div>
    )
}