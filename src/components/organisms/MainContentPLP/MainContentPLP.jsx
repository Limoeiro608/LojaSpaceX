import { CardProduct } from '../../../components/organisms/CardProduct/CardProduct'
import ImgBanner from '../../../assets/img/banner-plp.png'
import { Container } from 'reactstrap'
import { Categories } from '../../../components/molecules/Categories/Categories'
import { Button } from '../../../components/atoms/Button/Button'
import callAccount from '../../../utils'

callAccount(10, 20, 30)

export const MainContentPLP = () => {

    var cards = [];
    for (let index = 0; index < 12; index++) {
        cards.push(<CardProduct/>)
    }


    return (
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
                            {cards.map((item) =>(
                                <CardProduct key={item} />
                            ))}
                        </div>
                        <div className='PLP-container__btnBox'>
                            <p>12 de 40<br />produtos</p>
                            <Button className={'Button'}>Carregar Mais</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
const product = [{
    id: 2,
    title: "Cafeteira Expresso Oster Cappuccino",
    smallDescription: null,
    oldPrice: "800,00",
    price: "599,00"
}]