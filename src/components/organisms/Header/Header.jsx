import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import {Navbar} from '../Header/Navbar/Navbar'

export const Header = () => {

    return (
        <div className="Header">
            <div className='container'>
                <div className='row'>
                    <div className='col-11 text-center text-md-start'>
                        <img className='Header-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-1'>
                        <Link to='MyCart'><img className='Header-cart' src={ImgCart} alt='Cart' /></Link>
                    </div>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}