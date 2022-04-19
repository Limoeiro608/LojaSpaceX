import {Banner} from '../../components/molecules/Banner/Banner'
import {Footer} from '../../components/organisms/Footer/Footer'
import {BannerSlide} from '../../components/molecules/BannerSlide/BannerSlide'
import {BannerSlideMarks} from '../../components/molecules/BannerSlide/BannerSlideMarks'
import {HeaderDefault} from '../../layouts/HeaderDefault'
import {NewsBanner} from '../../components/organisms/NewsBanner/NewsBanner'

const Home = () => {
	return (
		<section className='Home-container'>
			<header>
				<div className='Region col-12'>
					<HeaderDefault/>
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<BannerSlide/>
				</div>
				<div className='Region col-12 mt-5'>
					<BannerSlideMarks/>
				</div>
				<section>
					<NewsBanner/>
				</section>
				<div className='Region col-12 container'>
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
