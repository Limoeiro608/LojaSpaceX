import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'
import { WhoWeAre } from '../../components/organisms/WhoWeAre/WhoWeAre'
import MediaQuery from 'react-responsive'
import { HeaderMobile } from '../../components/organisms/Header/HeaderMobile'

const Content = () => {
	return (
		<>
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