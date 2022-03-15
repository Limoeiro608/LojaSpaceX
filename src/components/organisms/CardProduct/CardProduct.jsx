import { Link } from 'react-router-dom';
import ImgCafeteira from '../../../assets/products/id-2.png'

export const CardProduct = () => {

    const product = {
        id: 2,
        active: true,
        title: "Cafeteira Expresso Oster Cappuccino",
        smallDescription: null,
        oldPrice: "800,00",
        price: "599,00"
    }

    return (
        <article className='CardProduct'>
            <Link className='CardProduct-way' to='PDP'>
                <figure>
                    <img className='CardProduct-picture' src={ImgCafeteira} alt='cafeteira' />
                </figure>
                <div className='CardProduct-content'>
                    <h3 className='CardProduct-content__title'>{product.title}</h3>
                    <div>
                        <span className='CardProduct-content__last'>De R${product.oldPrice} por</span><br />
                        <span className='CardProduct-content__current'>R$ {product.price}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}