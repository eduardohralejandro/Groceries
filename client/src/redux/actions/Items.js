import uuid from 'uuid';

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_STATE = 'CLEAR_STATE';

export const addItem = ({ id = uuid(), itemTitle = '', person = '', price = 0, checkbox = false } = {}) => ({
	type: ADD_ITEM,
	item: {
		id,
		itemTitle,
		person,
		price,
		checkbox
	}
});

export const removeItem = ({ id }) => ({
	type: REMOVE_ITEM,
	id
});

export const clearState = () => ({
	type: CLEAR
});
