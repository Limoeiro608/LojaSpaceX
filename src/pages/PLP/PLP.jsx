import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import { CardProduct } from '../../components/organisms/CardProduct/CardProduct'
import ImgBanner from '../../assets/img/banner-plp.png'
import { Container } from 'reactstrap'
import { Categories } from '../../components/molecules/Categories/Categories'
import { Button } from '../../components/atoms/Button/Button'

const PLP = () => {
	
		var cards = [];
		 for (let index = 0; index < 12; index++){
			cards.push(<CardProduct key={index}/>)	 
		}

	return (
		<>
			<header>
				<div className='Region col-12'>
					<Header />
				</div>
			</header>
			<main>
				<Container>
					<img className='PLP-picture' src={ImgBanner} alt='banner' />
					<div className='Region col-12'>
						<div className='PLP-container'>

						</div>
						<div className='PLP-container'>
							<div className='PLP-container__categories'>
								<Categories />
							</div>
							<div className='PLP-container__products'>
								<div className='products-bestSellers'>
									<h3>Mais Vendidos</h3>
								</div>
								{cards}
							</div>
							<div className='PLP-container__btnBox'>
								<p>12 de 40<br />produtos</p>
								<Button className={'Button'}>Carregar Mais</Button>
							</div>
						</div>
					</div>
				</Container>
			</main>
			<footer>
				<div className='Region col-12'>
					<Footer />
				</div>
			</footer>
		</>
	)
}

export default PLP