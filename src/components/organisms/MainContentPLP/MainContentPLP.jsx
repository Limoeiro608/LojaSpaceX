import callAccount from '../../../utils'
import products from '../../../data'
import ImgBanner from '../../../assets/img/banner-plp.png'
import { CardProduct } from '../../../components/organisms/CardProduct/CardProduct'
import { Container } from 'reactstrap'
import { Categories } from '../../../components/molecules/Categories/Categories'
import { Button } from '../../../components/atoms/Button/Button'

export const MainContentPLP = () => {

    callAccount(10, 20, 30)

    return (
        <section className='PLP-container'>
            <Container>
                <img className='PLP-picture' src={ImgBanner} alt='banner' />
                <div className='Region col-12'>
                    <div className='PLP-box'>
                    </div>
                    <div className='PLP-box'>
                        <div className='PLP-box__categories'>
                            <Categories />
                        </div>
                        <div>
                            <div className='products-bestSellers'>
                                <h3>Mais Vendidos</h3>
                            </div>
                            <div className='PLP-box__products'>
                                {products.map((product) => 
                                    <CardProduct key={product.id}
                                        img={product.img}
                                        title={product.title}
                                        oldPrice={product.oldPrice}
                                        price={product.price}
                                    />
                                )}
                            </div>
                            <div className='PLP-box__btnBox'>
                                <p>12 de 40<br />produtos</p>
                                <Button className={'Button Button--fontExo'}>Carregar Mais</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
