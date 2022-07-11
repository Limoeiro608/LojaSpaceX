import { Link } from 'react-router-dom'
import ImgLogo from '../../../src/assets/img/space-logo.png'

export const SiteMap = () => {
    return (
        <section className='SiteMap'>
            <div className='SiteMap-title'>RoadMap<img src={ImgLogo} /></div>
            <div>
                <ul className='SiteMap-list'>
                    <li><Link target="_blank" to='Home'>Home</Link></li>
                    <li><Link target="_blank" to='PDP'>Desafio PDP</Link></li>
                    <li><Link target="_blank" to='PLP'>Desafio PLP</Link></li>
                    <li><Link target="_blank" to='Content'>Desafio Weber Content</Link></li>
                    <li><Link target="_blank" to='MyCart'>Carrinho</Link></li>
                </ul>
            </div>
        </section>
    )
}