import { CHECK_DOMAIN, START_DOMAIN_CHECK } from '../actions/types';

export default (state = { domain: '' }, action) => {
	switch(action.type) {
		case CHECK_DOMAIN:
			//Invalidate if current domain doesn't match
			if(state.domain === action.payload.domain) {
				return {...state, ...action.payload, checking: false};
			} else {
				return state;
			}
		case START_DOMAIN_CHECK:
			return { domain: action.payload, checking: true };
	}

	return state;
};