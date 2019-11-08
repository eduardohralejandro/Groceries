import { createStore, combineReducers } from 'redux';
import itemsReducer from '../reducers/Items';
import shopListReducer from '../reducers/ShoppingList';

const Store = createStore(combineReducers({ itemsReducer, shopListReducer }));

export default Store;
