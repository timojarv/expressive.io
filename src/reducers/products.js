import { LOAD_PRODUCTS } from '../actions/types';


export default function productsReducer(state = [], action) {
	switch(action.type) {
		case LOAD_PRODUCTS:
			return action.payload;
	}

	return state;
}