import React from 'react';
import { Link, Route } from 'react-router';

import products from '../data/products';

import CustomerInfo from './customer_info';
import Domain from './domain';
import Payment from './payment';

export default class BuyWidget extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 0
		};

		this.nextPage = this.nextPage.bind(this);
		this.renderPage = this.renderPage.bind(this);
	}

	nextPage() {
		this.setState(state => ({ ...state, page: state.page + 1 }));
	}

	findProductWithId(id) {
		const found = products.filter( (product) => (id === product.id) );
		return found[0];
	}

	renderPage() {
		switch(this.state.page) {
			case 0:
				return <CustomerInfo />;
			case 1:
				return <Domain />;
			case 2:
				return <Payment />;
		}

		return <div>Invalid</div>
	}

	render() {
		const product = this.findProductWithId(this.props.params.id);
		return (
			<div className="buy-widget modal-bg">
				<div className="modal">
					<div className="heading">
						Buying product: {product.name}
						<Link to="/" className="close">Close</Link>
					</div>
					<div className="content">
						{this.renderPage()}
					</div>
					<a className="footer" href="#" onClick={this.nextPage}>Next</a>
				</div>
			</div>
		);
	}
}