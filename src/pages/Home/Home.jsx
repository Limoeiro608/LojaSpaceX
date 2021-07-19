import { HelloWorld } from '../../components/HelloWorld/HelloWorld'

const Home = () => {
	return (
		<>
			<header>
				<div className='Region col-12'></div>
			</header>
			<main>
				<div className='Region col-12'>
					<HelloWorld />
				</div>
			</main>
			<footer className='Region col-12'></footer>
		</>
	)
}

export default Home
