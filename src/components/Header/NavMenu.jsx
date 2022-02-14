import { NavLink } from "./NavLink";
import ImgPoint from '../../assets/img/map-pointer.png'
import ImgMobile from '../../assets/img/mobile.png'

export const NavMenu = () => {

    return (
        <ul className='Header-nav'>
            <div className='row'>
                <div className=' col-md-3 '>
                    <div className='Header-nav__div Header-nav__first-child'>
                        <img src={ImgPoint} alt='pointer' /><NavLink href='#'>Informe seu<strong> CEP</strong></NavLink>
                    </div>
                </div>
                <div className='col-md-5 col-lg-3'>
                    <div className='Header-nav__div Header-nav__middle-child'>
                        <NavLink href='#'>Home</NavLink>
                        <NavLink href='#'>Desafio PDP</NavLink>
                        <NavLink href='#'>Desafio PLP</NavLink>
                    </div>
                </div>
                <div className='col-md-4 col-lg-6'>
                    <div className='Header-nav__div Header-nav__last-child'>
                        <img src={ImgMobile} alt='mobile' /><NavLink href='#'>Baixe o nosso App</NavLink>
                    </div>
                </div>
            </div>
        </ul>
    );
} 