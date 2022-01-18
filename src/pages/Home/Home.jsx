import { Banner } from '../../components/Banner/Banner'
import { Header } from '../../components/Header/Header'
//import { Footer } from '../../components/Footer/Footer'

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
			</footer>
		</>
	)
}

export default Home
