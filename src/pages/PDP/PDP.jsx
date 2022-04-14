import { Footer } from '../../components/organisms/Footer/Footer'
import { PageProduct } from '../../components/organisms/PageProduct/PageProduct'
import {HeaderDefault} from '../../layouts/HeaderDefault'

const PDP = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<HeaderDefault/>
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<PageProduct />
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