import { Footer } from '../../components/organisms/Footer/Footer'
import { ProductsList } from '../../components/organisms/ProductsList/ProductsList'
import {HeaderDefault} from '../../layouts/HeaderDefault'

const MyCart = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<HeaderDefault/>
				</div>
			</header>
			<main>
                <div className='Region col-12'>
                    <ProductsList/>
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