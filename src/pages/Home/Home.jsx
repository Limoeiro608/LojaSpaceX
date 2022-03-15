import { Banner } from '../../components/molecules/Banner/Banner'
import { Header } from '../../components/organisms/Header/Header'
import { Footer } from '../../components/organisms/Footer/Footer'

const Home = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<Header/>
				</div>	
			</header>
			<main>
				<div className='Region col-12'>
					<Banner/>
				</div>
			</main>
			<footer>
				<div className='Region col-12'></div>	
					<Footer/>
			</footer>
		</>
	)
}

export default Home
