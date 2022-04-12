import { Banner } from '../../components/molecules/Banner/Banner'
import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import MediaQuery from 'react-responsive'
import { HeaderMobile } from '../../components/organisms/Header/HeaderMobile'
import { Slide1 } from '../../components/molecules/Slide/Slide1'
import { Slide2 } from '../../components/molecules/Slide/Slide2'
import { Video } from '../../components/atoms/Video/Video'
import ImgThumb1 from '../../assets/img/thumb-mail-1.png'
import ImgThumb2 from '../../assets/img/thumb-mail-2.png'
import VideoRocket from '../../assets/video/rocket.mp4'
import { SmallNewsText } from '../../components/molecules/SmallNewsText/SmallNewsText'

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
				<div className='Region col-12 mt-5'>
					<Slide2 />
				</div>
				<section className='Region col-12 container d-lg-flex mt-5 mb-5'>
					<Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb1} />
					<SmallNewsText newsText='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
						newsParagraphs='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
					/>
				</section>
				<section className='Region col-12 container d-lg-flex mt-5 mb-5'>
					<MediaQuery maxWidth={990}>
						<Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb2} />
						<SmallNewsText newsText='Dragão Retorna à Terra'
							newsParagraphs='Dragon completa a primeira missão civil em órbita'
						/>
					</MediaQuery>
					<MediaQuery minWidth={991}>
						<SmallNewsText newsText='Dragão Retorna à Terra'
							newsParagraphs='Dragon completa a primeira missão civil em órbita'
						/>
						<Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb2} />
					</MediaQuery>
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
