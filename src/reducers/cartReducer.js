import { addItemsToCart } from "./cartUtils";
const INITIAL_STATE = {
  cartToggleDropdown: false,
  itemsArray: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return { ...state, cartToggleDropdown: !state.cartToggleDropdown };
    case "ADD_ITEM":
      return {
        ...state,
        itemsArray: addItemsToCart(state.itemsArray, action.payload),
      };
    case "CART_TOGGLE_DROPDOWN_IN_CHECKOUT":
      return {
        ...state,
        cartToggleDropdown: false,
      };
    default:
      return state;
  }
};
