import { Banner } from '../../components/molecules/Banner/Banner'
import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import MediaQuery from 'react-responsive'
import { HeaderMobile } from '../../components/organisms/Header/HeaderMobile'
import { Slide1 } from '../../components/molecules/Slide/Slide1'
import { Slide2 } from '../../components/molecules/Slide/Slide2'

const Home = () => {
	return (
		<section className='Home-container'>
			<header>
				<div className='Region col-12'>
					<MediaQuery maxWidth={990}>
						<HeaderMobile />
					</MediaQuery>
					<MediaQuery minWidth={991}>
						<Header />
					</MediaQuery>
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<Slide1 />
				</div>
				<div className='Region col-12'>
					<Slide2 />
				</div>
				<div className='Region col-12'>
					<Banner />
				</div>
			</main>
			<footer>
				<div className='Region col-12'></div>
				<Footer />
			</footer>
		</section>
	)
}

export default Home
