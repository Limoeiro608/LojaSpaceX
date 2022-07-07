import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './pages/Home/Home'
import pdp from './pages/PDP/PDP'
import plp from './pages/PLP/PLP'
import content from './pages/Content/Content'
import cart from './pages/MyCart/MyCart'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={home} />
				<Route path='/home' exact component={home} />
				<Route path='/pdp' exact component={pdp} />
				<Route path='/plp' exact component={plp} />
				<Route path='/content' exact component={content} />
				<Route path='/cart' exact component={cart} />
			</Switch>
		</Router>
	);
}

export default App;
