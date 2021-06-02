import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { Choose } from './views/Choose/Choose';
import { Confirm } from './views/Confirm/Confirm';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/select">
					<Choose />
				</Route>
				<Route path="/confirm">
					<Confirm />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
