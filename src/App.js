import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='*' component={Home} />
			</Switch>
		</Router>
  );
}

export default App;
