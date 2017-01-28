import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import ProductItem from './product_item';

class App extends Component {
	componentWillMount() {
		this.props.loadProducts();
	}

	renderProducts() {
		return this.props.products.map((product) => <ProductItem key={product.id} product={product} />);
	}

	render() {
		return (
			<div className="app">
				<h2>Find your perfect website package!</h2>
				{this.renderProducts()}
				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, actions)(App);