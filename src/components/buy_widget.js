import React from 'react';
import { Link, Route } from 'react-router';
import { connect } from 'react-redux'

import Domain from './domain';
import CustomerInfo from './customer_info';
import Payment from './payment';

class BuyWidget extends React.Component {

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
		const found = this.props.products.filter( (product) => (id === product.id) );
		return found[0];
	}

	renderPage() {
		switch(this.state.page) {
			case 0:
				return <Domain />;
			case 1:
				return <CustomerInfo />;
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
					<div className="content">
						{this.renderPage()}
					</div>
					<Link to="/" className="button button-outline">Cancel</Link>
					<div className="float-right"><a className="button" href="#" onClick={this.nextPage}>Continue</a></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps)(BuyWidget);