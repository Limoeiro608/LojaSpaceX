import ImgThumb1 from '../../assets/img/thumb-mail-1.png'
import ImgThumb2 from '../../assets/img/thumb-mail-2.png'
import VideoRocket from '../../assets/video/rocket.mp4'
import { Banner } from '../../components/molecules/Banner/Banner'
import { Footer } from '../../components/organisms/Footer/Footer'
import { BannerSlide } from '../../components/molecules/BannerSlide/BannerSlide'
import { BannerSlideMarks } from '../../components/molecules/BannerSlide/BannerSlideMarks'
import { HeaderDefault } from '../../layouts/HeaderDefault'
import { NewsBanner } from '../../components/organisms/NewsBanner/NewsBanner'

const Home = () => {
	return (
		<section className='Home-container'>
			<header>
				<div className='Region col-12'>
					<HeaderDefault />
				</div>
			</header>
			<main>
				<div className='Region col-12'>
					<BannerSlide />
				</div>
				<div className='Region col-12 mt-5'>
					<BannerSlideMarks />
				</div>
				<section className='Region col-12 container mt-5 mb-5'>
					<NewsBanner newsText={'Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'}
					newsParagraphs={'Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.'} 
					src={VideoRocket}
					poster={ImgThumb1} 
					inverse={false} 	
					/>
				</section>
				<section className='Region col-12 container mt-5 mb-5'>
					<NewsBanner newsText={'Dragão Retorna à Terra'}  
					newsParagraphs={'Dragon completa a primeira missão civil em órbita'}
					poster={ImgThumb2} 
					inverse={true} 	
					/>
				</section>
				<div className='Region col-12 container'>
					<Banner />
				</div>
			</main>
			<footer>
				<div className='Region col-12'>
					<Footer />
				</div>
			</footer>
		</section>
	)
}

export default Home
