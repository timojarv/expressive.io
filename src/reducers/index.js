import { combineReducers } from 'redux';
import customerInfo from './customer_info';
import domain from './domain';

export default combineReducers({ customerInfo, domain });