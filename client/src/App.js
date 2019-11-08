import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import ShoppingLists from './components/ShoppingLists/ShoppingLists';
import Expenses from './components/Expenses/Expenses';
import Recipes from './components/Recipes/Recipes';
import Navbar from './components/Navbar/Navbar';
import Store from './redux/store/Items';

const App = () => {
	return (
		<>
			<Provider store={Store}>
				<Router>
					<Navbar />
					<Route exact path="/" component={ShoppingLists} />
					<Route path="/expenses" component={Expenses} />
					<Route path="/recipes" component={Recipes} />
				</Router>
			</Provider>
		</>
	);
};

export default App;
