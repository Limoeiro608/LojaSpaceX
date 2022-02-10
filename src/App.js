import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PDP from './pages/PDP/PDP'

function App() {
  return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/PDP' exact component={PDP} />
			</Switch>
		</Router>
  );
}

export default App;
