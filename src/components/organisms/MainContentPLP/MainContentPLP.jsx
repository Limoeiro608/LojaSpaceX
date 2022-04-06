import { CardProduct } from '../../../components/organisms/CardProduct/CardProduct'
import ImgBanner from '../../../assets/img/banner-plp.png'
import { Container } from 'reactstrap'
import { Categories } from '../../../components/molecules/Categories/Categories'
import { Button } from '../../../components/atoms/Button/Button'
import callAccount from '../../../utils'
import products from '../../../data'

export const MainContentPLP = () => {

    callAccount(10, 20, 30)

    return (
        <section className='Plp-container'>
            <Container>
                <img className='PLP-picture' src={ImgBanner} alt='banner' />
                <div className='Region col-12'>
                    <div className='PLP-container'>
                    </div>
                    <div className='PLP-container'>
                        <div className='PLP-container__categories'>
                            <Categories />
                        </div>
                        <div>
                            <div className='products-bestSellers'>
                                <h3>Mais Vendidos</h3>
                            </div>
                            <div className='PLP-container__products'>
                                {products.map((product) => 
                                    <CardProduct key={product.id}
                                        img={product.img}
                                        title={product.title}
                                        oldPrice={product.oldPrice}
                                        price={product.price}
                                    />
                                )}
                            </div>
                            <div className='PLP-container__btnBox'>
                                <p>12 de 40<br />produtos</p>
                                <Button className={'Button'}>Carregar Mais</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
