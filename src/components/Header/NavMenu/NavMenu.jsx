
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../../../pages/Home/Home'
import PDP from '../../../pages/PDP/PDP'
import ImgPoint from '../../../assets/img/map-pointer.png'
import ImgMobile from '../../../assets/img/mobile.png'

export const NavMenu = () => {

    return (
        <ul className='Header-nav'>
            <div className='row'>
                <div className=' col-md-3 '>
                    <div className='Header-nav__container Header-nav__first-child'>
                        <li><img src={ImgPoint} alt='pointer' /><Link className="Header-nav__way" to='Home'>Informe seu<strong> CEP</strong></Link></li>
                    </div>
                </div>
                <div className='col-md-5 col-lg-3'>
                    <div className='Header-nav__container Header-nav__middle-child'>
                        <li><Link className="Header-nav__way" exact to="Home">Home</Link></li>
                        <li><Link className="Header-nav__way" to="PDP">Desafio PDP</Link></li>
                        <li><Link className="Header-nav__way" to='Home'>Desafio PLP</Link></li>
                    </div>
                </div>
                <div className='col-md-4 col-lg-6'>
                    <div className='Header-nav__container Header-nav__last-child'>
                        <li><img src={ImgMobile} alt='mobile' /><Link className="Header-nav__way" to='Home'>Baixe o nosso App</Link></li>
                    </div>
                </div>
            </div>
        </ul>
    );
} 