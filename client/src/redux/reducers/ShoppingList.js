const shopListReducerDefaultState = [];

export default (state = shopListReducerDefaultState, action) => {
	switch (action.type) {
		case 'SAVE_SHOPPING_LIST':
			return [...state, action.shopList];
		case 'CHECKED_ITEM':
			state.map(element => {
				const newState = {
					...element,
					item: element.item.map(item => {
						if (item.id === action.checked) {
							item.checkbox = !item.checkbox;
							return {
								...item,
								checkbox: !item.checkbox
							};
						}
						return item;
					})
				};
				return newState;
			});
		case 'EDIT_ITEM':
			state.map(element => {
				const newState = {
					...element,
					item: element.item.map(item => {
						if (item.id === action.id) {
							item.title = item.title;
							item.person = item.person;
							item.price = item.price;
							return {
								...item,
								itemTitle: item.title,
								person: item.person,
								price: item.price
							};
						}
						return item;
					})
				};

				return newState;
			});
		default:
			return state;
	}
};
