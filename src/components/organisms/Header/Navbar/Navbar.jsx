import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgPoint from '../../../../assets/img/map-pointer.png'
import ImgMobile from '../../../../assets/img/mobile.png'

export const Navbar = () => {
    return (
        <nav>
            <div className='Navbar' >
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='Navbar-container Navbar-firstChild'>
                            <img src={ImgPoint} alt='pointer' /><Link className="Navbar-way" to='Home'>Informe seu<strong> CEP</strong></Link>
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-6'>
                        <ul className='Navbar-container Navbar-middleChild'>
                            <li><Link className="Navbar-way" to='Home'>Home</Link></li>
                            <li><Link className="Navbar-way" to='PDP'>Desafio PDP</Link></li>
                            <li><Link className="Navbar-way" to='PLP'>Desafio PLP</Link></li>
                            <li><Link className="Navbar-way" to='Content'>Desafio Weber Content</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-lg-3'>
                        <div className='Navbar-container Navbar-lastChild'>
                            <img src={ImgMobile} alt='mobile' /><Link className="Navbar-way" to='Home'>Baixe o nosso App</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}