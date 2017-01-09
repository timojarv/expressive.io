import { UPDATE_NAME, UPDATE_EMAIL, CHECK_DOMAIN } from './types'

import axios from 'axios';

const propUpdater = (type) => (payload) => ({ type, payload });

export const updateName = propUpdater(UPDATE_NAME);
export const updateEmail = propUpdater(UPDATE_EMAIL);

export function checkDomain(domain) {
	return (dispatch) => {
		axios.get("/api/domain/" + domain)
			.then(response => {
				dispatch({
					type: CHECK_DOMAIN,
					payload: response.data
				});
			});
	};
}
