import { combineReducers } from 'redux';
import customerInfo from './customer_info';
import domain from './domain';
import products from './products';

export default combineReducers({ customerInfo, domain, products });