import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Link to="/">Lists</Link>
			<Link to="/recipes">Recipes</Link>
			<Link to="/expenses">Expenses</Link>
		</>
	);
};

export default Navbar;
