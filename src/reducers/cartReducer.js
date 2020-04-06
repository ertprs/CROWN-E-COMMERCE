const INITIAL_STATE = {
  cartToggleDropdown: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return { ...state, cartToggleDropdown: !state.cartToggleDropdown };
    default:
      return state;
  }
};
