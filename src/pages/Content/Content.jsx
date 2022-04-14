import { Footer } from '../../components/organisms/Footer/Footer'
import { WhoWeAre } from '../../components/organisms/WhoWeAre/WhoWeAre'
import { HeaderDefault } from '../../layouts/HeaderDefault'

const Content = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<HeaderDefault />
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<WhoWeAre />
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

export default Content