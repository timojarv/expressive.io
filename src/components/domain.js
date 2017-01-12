import React from 'react';
import { Link } from 'react-router';

import DomainSelector from './domain_selector';

export default function(props) {
	return (
		<div>
			<h4>Choose a Domain Name</h4>
			<DomainSelector />
		</div>
	);
};