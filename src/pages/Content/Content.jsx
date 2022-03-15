import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import { WhoWeAre } from '../../components/Templates/WhoWeAre/WhoWeAre'

  const Content = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<Header />
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<WhoWeAre/>
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