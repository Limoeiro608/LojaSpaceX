import { BrowserRouter as Router, Link } from 'react-router-dom'
import ImgLogo from '../../../src/assets/img/space-logo.png'

export const SiteMap = () => {
    return (
        <section className='SiteMap'>
            <div className='SiteMap-title'>RoadMap<img src={ImgLogo} /></div>
            <div>
                <ul className='SiteMap-list'>
                    <li><Link to='Home'>Home</Link></li>
                    <li><Link to='PDP'>Desafio PDP</Link></li>
                    <li><Link to='PLP'>Desafio PLP</Link></li>
                    <li><Link to='Content'>Desafio Weber Content</Link></li>
                    <li><Link to='MyCart'>Carrinho</Link></li>
                </ul>
            </div>
        </section>
    )
}