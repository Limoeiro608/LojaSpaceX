import { Banner } from '../../components/molecules/Banner/Banner'
import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import MediaQuery from 'react-responsive'
import { HeaderMobile } from '../../components/organisms/Header/HeaderMobile'
import { Slide1 } from '../../components/molecules/Slide/Slide1'
import { Slide2 } from '../../components/molecules/Slide/Slide2'
import {Video} from '../../components/atoms/Video/Video'
import ImgThumb1 from '../../assets/img/thumb-mail-1.png'
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
				<div className='Region col-12'>
					<Slide2 />
				</div>
				<div className='Region col-12 container d-flex mt-5 mb-5'>
					<Video src={'https://youtu.be/GeDjSagSFeg?t=33'} width={'50%'} height={'100%'}  poster={ImgThumb1} />
					<SmallNewsText newsText='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
					newsParagraphs='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
					 />
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
