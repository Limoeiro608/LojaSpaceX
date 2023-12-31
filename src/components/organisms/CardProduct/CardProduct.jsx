import { Link } from 'react-router-dom'

export const CardProduct = (props) => {

    return (
        <article className='CardProduct'>
            <Link className='CardProduct-way' to='pdp'>
                <figure className='CardProduct-imgContent'>
                    <img className='CardProduct-imgContent_picture' src={props.img} alt='imagem do produto' />
                </figure>
                <div className='CardProduct-content'>
                    <h3 className='CardProduct-content__title'>{props.title}</h3>
                    <div>
                        <span className='CardProduct-content__last'>De R${props.oldPrice} por</span><br/>
                        <span className='CardProduct-content__current'>R$ {props.price}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
