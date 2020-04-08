import { addItemsToCart } from "./cartUtils";
const INITIAL_STATE = {
  cartToggleDropdown: false,
  itemCount: 0,
  itemsArray: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return { ...state, cartToggleDropdown: !state.cartToggleDropdown };
    case "ADD_ITEM":
      console.log(state.itemsArray);
      return {
        ...state,
        itemsArray: addItemsToCart(state.itemsArray, action.payload),
      };
    case "UPDATE_ITEM_COUNT":
      return { ...state, itemCount: action.payload };
    default:
      return state;
  }
};
