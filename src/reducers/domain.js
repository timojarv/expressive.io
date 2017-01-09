import { CHECK_DOMAIN } from '../actions/types';

export default (state = {}, action) => {
	console.log(action);
	switch(action.type) {
		case CHECK_DOMAIN:
			return {...state, ...action.payload};
	}

	return state;
};