import { UPDATE_NAME, UPDATE_EMAIL, START_DOMAIN_CHECK, CHECK_DOMAIN, LOAD_PRODUCTS } from './types'

import axios from 'axios';

const propUpdater = (type) => (payload) => ({ type, payload });

export const updateName = propUpdater(UPDATE_NAME);
export const updateEmail = propUpdater(UPDATE_EMAIL);

export function checkDomain(domain) {
	return (dispatch) => {
		console.log("Starting check: ", domain);
		dispatch({
			type: START_DOMAIN_CHECK,
			payload: domain
		});

		axios.get("/api/domain/" + domain)
			.then(response => {
				console.log(response);
				dispatch({
					type: CHECK_DOMAIN,
					payload: response.data
				});
			});
	};
}

export function loadProducts() {
	return dispatch => {
		axios.get("/api/products").then(response => {
			dispatch({
				type: LOAD_PRODUCTS,
				payload: response.data.products
			});
		});
	};
}