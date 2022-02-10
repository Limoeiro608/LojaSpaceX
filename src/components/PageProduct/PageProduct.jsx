import { Button } from '../Button/Button';
import ImgHelmet from '../../assets/img/helmet.png'
import { ImgProduct } from './ImgProduct'
import { HeaderProduct } from './HeaderProduct';
import { Container } from 'reactstrap';
import { InformationP } from './InformationP';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
//library.add(fas)

//const cart = <FontAwesomeIcon icon="cart-shopping" />

export const PageProduct = () => {


    return (
        <Container>
            <section className='PageProduct'>
                <div >
                    <ImgProduct src={ImgHelmet} alt='capacete' />
                </div>
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
                    <Button className={'Button Button--green Button--fontExo'} label={'Adicionar ao Carrinho'} />
                    <Button className={'Button Button--fontInter'} label={'Adicionar a Lista de Interesses'} />
                </div>
                <div>
                    <div>
                        <h2 className="DetailsProduct-title">Detalhes do produto</h2>
                    </div>
                    <InformationP/>
                </div>
            </section>
        </Container>
    );
}