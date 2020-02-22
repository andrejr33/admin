import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/';
import Lista from './pages/sistema/';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/list" component={Lista} />
		</Switch>
	</BrowserRouter>
);


export default Routes;