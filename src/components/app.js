import React from 'react';
import products from '../data/products';

import ProductItem from './product_item';

export default class App extends React.Component {

	renderProducts() {
		return products.map((product) => <ProductItem key={product.id} product={product} />);
	}

	render() {
		return (
			<div className="app">
				<h1>Welcome to Expressive.io!</h1>
				<h2>Find your perfect website package!</h2>
				{this.renderProducts()}
				{this.props.children}
			</div>
		);
	}
}