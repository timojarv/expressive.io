import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './components/app';
import BuyWidget from './components/buy_widget';

export default function() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/buy/:id" component={BuyWidget} />
			</Route>
		</Router>
	);
}