import { Link } from 'react-router-dom'
import ImgLogo from '../../../assets/img/space-logo.png'
import ImgCart from '../../../assets/img/cart.png'
import ImgMenu from '../../../assets/img/menu-mobile.png'

export const HeaderMobile = () => {

    return (
        <div className="HeaderMobile">
            <div className='container'>
                <div className='row'>
                    <div className='col-2 text-start'>
                        <Link to='cart'><img className='HeaderMobile-cart' src={ImgCart} alt='Cart' /></Link>
                    </div>
                    <div className='col-8 text-center'>
                        <img className='HeaderMobile-logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div className='col-2 text-end'>
                        <button className='HeaderMobile-menu'><img src={ImgMenu} alt='Menu' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}