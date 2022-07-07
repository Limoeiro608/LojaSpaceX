import { Footer } from '../../components/organisms/Footer/Footer'
import { ProductsList } from '../../components/organisms/TableProducts/ProductsList/ProductsList'
import { HeaderDefault } from '../../layouts/HeaderDefault'
import { CartTotal } from "../../components/molecules/CartTotal/CartTotal"
import { BannerSlideProducts } from '../../components/molecules/BannerSlide/BannerSlideProducts'
import { SwiperSlide } from 'swiper/react';
import products from '../../data'
import { CardProduct } from '../../components/organisms/CardProduct/CardProduct'
import 'swiper/css/virtual';

const MyCart = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<HeaderDefault />
				</div>
			</header>
			<main className='Color-container'>
				<div className='Region container col-12 '>
					<section className='d-lg-flex'>
						<ProductsList />
						<CartTotal />
					</section>
					<section className='mb-5'>
						<BannerSlideProducts title='Produtos sugeridos'>
							{products.map((product) =>
								<SwiperSlide key={product.id}>
									<CardProduct key={product.id}
										{...product}
									/>
								</SwiperSlide>
							)}
						</BannerSlideProducts>
					</section>
				</div>
			</main>
			<footer>
				<div className='Region col-12'>
					<Footer />
				</div>
			</footer>
		</>
	)
}

export default MyCart