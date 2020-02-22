import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/';
import Lista from './pages/sistema/';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/admin" component={Login} />
			<Route exact path="/admin/list" component={Lista} />
		</Switch>
	</BrowserRouter>
);


export default Routes;