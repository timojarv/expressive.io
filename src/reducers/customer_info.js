import { UPDATE_NAME, UPDATE_EMAIL } from '../actions/types';

export default (state = {}, action) => {
	switch(action.type) {
		case UPDATE_NAME:
			return { ...state, name: action.payload }
		case UPDATE_EMAIL:
			return { ...state, email: action.payload }
	}

	return state;
};