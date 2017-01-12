import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Icon from 'react-evil-icons';

class DomainSelector extends Component {
	constructor(props) {
		super(props);
		
		this.state = { domain: "" };
	}

	handleChange(event) {
		const domain = event.target.value;
		this.setState({domain});
		this.props.checkDomain(domain);
	}

	renderIcon() {
		if(!this.state.domain.length) return;
		if(this.props.domain.available) return <Icon name="ei-check" size="s" />;
		return <Icon name="ei-close-o" size="s" />;
	}

	render() {
		return (
			<form className="domain-form">
				<label>Enter domain</label>
				<div className="domain-field">
					<input
						type="text"
						value={this.state.domain}
						onChange={this.handleChange.bind(this)}
					/>
					{this.renderIcon()}
				</div>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		domain: state.domain
	};
}

export default connect(mapStateToProps, actions)(DomainSelector);