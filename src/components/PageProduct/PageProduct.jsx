import { Button } from '../Button/Button'
import ImgHelmet from '../../assets/img/helmet.png'
import { ImgProduct } from './ImgProduct'
import { HeaderProduct } from './HeaderProduct'
import { Container } from 'reactstrap'
import { InformationP } from './InformationP'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
library.add(fas)

export const PageProduct = () => {

    const [hide, setHide] = useState(false)

    const product = {
        id: 1,
        active: true,
        title: "Capacete Espacial Lorem Ipsum Dolor Sit",
        smallDescription: "Embalagem de 1200g",
        oldPrice: "999,90",
        price: "890,00"
    }

    return (
        <Container>
            <section className='PageProduct'>
                <div className='d-md-flex'>
                    <div>
                        <ImgProduct src={ImgHelmet} alt='capacete' />
                    </div>
                    <div className='flex-column'>
                        <div>
                            <HeaderProduct
                                title={'Capacete Espacial Lorem Ipsum Dolor Sit'}
                                weight={'1200'}
                                lastPrice={'999,00'}
                                currentPrice={'890,00'}
                                howManyTimes={'5'}
                                howMuch={'178,00'}
                            />
                        </div>
                        <div>
                            <Button className={'Button Button--green Button--fontExo'}><FontAwesomeIcon icon="cart-shopping" />&ensp; Adicionar ao Carrinho</Button>
                            <Button className={'Button Button--fontInter'} onClick={() => setHide(!hide)}>Adicionar a Lista de Interesses</Button>
                        </div>
                        <div className='HeaderProduct-textJS'>
                            {hide ? <spawn>
                                PROMOÇÃO RELÂMPAGO: Compre agora o {product.title} de {product.oldPrice} por apenas {product.price}!
                            </spawn> : null}
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="DetailsProduct-title">Detalhes do produto</h2>
                    </div>
                    <InformationP />
                </div>
            </section>
        </Container>
    );
}