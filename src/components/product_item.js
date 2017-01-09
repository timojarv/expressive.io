import React from 'react';
import { Link } from 'react-router';

export default function(props) {
	return (
		<div className="product-item">
			<h3>{props.product.name}</h3>
			<Link to={"/buy/" + props.product.id}>Buy Now</Link>
		</div>
	);
}