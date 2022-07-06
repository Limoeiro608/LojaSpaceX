import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PDP from './pages/PDP/PDP'
import PLP from './pages/PLP/PLP'
import Content from './pages/Content/Content'
import MyCart from './pages/MyCart/MyCart'
import RoadMap from './pages/RoadMap/RoadMap'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={RoadMap} />
				<Route path='/Home' exact component={Home} />
				<Route path='/PDP' exact component={PDP} />
				<Route path='/PLP' exact component={PLP} />
				<Route path='/Content' exact component={Content} />
				<Route path='/MyCart' exact component={MyCart} />
			</Switch>
		</Router>
	);
}

export default App;
