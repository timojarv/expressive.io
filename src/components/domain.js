import React from 'react';
import { Link } from 'react-router';

import DomainSelector from './domain_selector';

export default function(props) {
	return (
		<div className="domain-form">
			Choose a domain here!
			<DomainSelector />
		</div>
	);
};