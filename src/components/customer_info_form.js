import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateName, updateEmail } from '../actions';

class CustomerInfoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.customerInfo.name,
			email: props.customerInfo.email
		};
	}

	handleNameChange(event) {
		this.handleChange('name', this.props.updateName, event);
	}

	handleEmailChange(event) {
		this.handleChange('email', this.props.updateEmail, event);
	}

	handleChange(field, updateFunction, event) {
		const data = event.target.value;
		updateFunction(event.target.value);
		this.setState((state) => {
			let newState = { ...state };
			newState[field] = data;
			return newState;
		});
	}

	render() {
		return (
			<form>
				<label>Full Name</label>
				<input
					type="text"
					value={this.state.name}
					onChange={this.handleNameChange.bind(this)}
				/>
				<label>Email</label>
				<input
					type="text"
					value={this.state.email}
					onChange={this.handleEmailChange.bind(this)}
				/>
			</form>
		);
	}
}


function mapStateToProps(state) {
	return {
		customerInfo: state.customerInfo
	};
}

export default connect(mapStateToProps, { updateName, updateEmail })(CustomerInfoForm);