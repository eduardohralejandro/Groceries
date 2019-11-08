const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.item];
		case 'REMOVE_ITEM':
			return state.filter(item => {
				return item.id !== action.id;
			});
		case 'CLEAR_STATE':
			return itemsReducerDefaultState;
		default:
			return state;
	}
};
