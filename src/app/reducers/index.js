import { combineReducers } from 'redux';
import { categories } from './categories';
import { joke } from './joke';

const rootReducer = combineReducers({ categories, joke });

export default rootReducer;