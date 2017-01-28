import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import debounce from 'lodash.debounce';

import Icon from 'react-evil-icons';

class DomainSelector extends Component {
	constructor(props) {
		super(props);
		this.state = { domain: '' }
		this.checkDomainDebounced = debounce(this.checkDomainDebounced, 300);
	}

	componentWillMount() {
		this.setState({
			domain: this.props.domain.domain
		});	
	}

	checkDomainDebounced(domain) {
		this.props.checkDomain(domain);
	}

	handleChange(event) {
		const domain = event.target.value;
		this.setState({ domain });
		this.checkDomainDebounced(domain);
	}

	renderIcon() {
		if(!this.state.domain.length) return;
		if(this.props.domain.checking) return <Icon name="ei-spinner-3" size="s" />;
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