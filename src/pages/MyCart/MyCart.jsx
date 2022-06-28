import { Footer } from '../../components/organisms/Footer/Footer'
import { ProductsList } from '../../components/organisms/TableProducts/ProductsList/ProductsList'
import { HeaderDefault } from '../../layouts/HeaderDefault'
import { CartTotal } from "../../components/molecules/CartTotal/CartTotal"
import { Notification } from '../../components/atoms/Notification/Notification'


const MyCart = () => {
	return (
		<>
			<header>
				<div className='Region col-12'>
					<HeaderDefault/>
					<Notification/>
					<Notification color='danger'/>
					<Notification color='warning'/>
				</div>
			</header>
			<main>
                <div className='Region container col-12 d-lg-flex'>
                    <ProductsList/>
					<CartTotal/>
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

export default MyCart