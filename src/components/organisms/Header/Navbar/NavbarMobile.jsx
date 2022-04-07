import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgPoint from '../../../../assets/img/map-pointer.png'
import ImgMobile from '../../../../assets/img/mobile.png'

export const NavbarMobile = () => {
    return (
        <nav className='NavbarMobile'>
            <div className='row' >
                <div className='col'>
                    <div>
                        <div className='NavbarMobile-container NavbarMobile-firstChild'>
                            <img src={ImgPoint} alt='pointer' /><Link className="NavbarMobile-way" to='Home'>Informe seu<strong> CEP</strong></Link>
                        </div>
                    </div>
                    <div>
                        <div className='NavbarMobile-container NavbarMobile-middleChild'>
                            <ul>
                                <li><Link className="NavbarMobile-way" to='Home'>Home</Link></li>
                                <li><Link className="NavbarMobile-way" to='PDP'>Desafio PDP</Link></li>
                                <li><Link className="NavbarMobile-way" to='PLP'>Desafio PLP</Link></li>
                                <li><Link className="NavbarMobile-way" to='Content'>Desafio Weber Content</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='NavbarMobile-Container NavbarMobile-LastChild'>
                            <img src={ImgMobile} alt='mobile' /><Link className="NavbarMobile-way" to='Home'>Baixe o nosso App</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}