import uuid from 'uuid';
import Store from '../store/Items';

const SAVE_SHOPPING_LIST = 'SAVE_SHOPPING_LIST';
const EDIT_ITEM = 'REMOVE_ITEM';
const CHECKED_ITEM = 'CHECKED_ITEM';

export const saveShoppinglist = ({ id = uuid(), title = '', item = Store.getState().itemsReducer } = {}) => ({
	type: SAVE_SHOPPING_LIST,
	shopList: {
		id,
		title,
		item
	}
});

export const editShoppingList = ({ id = 0, itemTitle = '', person = '', price = '' } = {}) => ({
	type: EDIT_ITEM,
	item: {
		id,
		itemTitle,
		person,
		price
	}
});

export const checkedItem = ({ checked = true }) => ({
	type: CHECKED_ITEM,
	checked
});
