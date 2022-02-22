import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { PageProduct } from '../../components/PageProduct/PageProduct'

const PDP = () => {
	return (
		<>

			<header>
				<div className='Region col-12'>
					<Header />
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<PageProduct/>
				</div>
			</main>
			<footer>
				<div className='Region col-12'></div>
				<Footer />
			</footer>
		</>
	)
}

export default PDP