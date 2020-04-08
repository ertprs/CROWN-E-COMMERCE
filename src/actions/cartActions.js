export const toggleDropdown = () => {
  return {
    type: "TOGGLE_DROPDOWN",
  };
};
let arr = [];
export const addItem = (itemsAddedToCart) => {
  arr.push({ ...itemsAddedToCart });
  const ids = new Set(arr.map((d) => d.id));
  const storedItems = localStorage.getItem("test");
  if (storedItems) {
    const parsedStoredItems = JSON.parse(storedItems);
    arr = [...arr, ...parsedStoredItems.filter((item) => !ids.has(item.id))];
  }
  const test = JSON.stringify(arr);
  localStorage.setItem("test", test);
  return {
    type: "ADD_ITEM",
    payload: { ...itemsAddedToCart },
  };
};

export const cartToggleDropdownInCheckout = () => {
  return {
    type: "CART_TOGGLE_DROPDOWN_IN_CHECKOUT",
  };
};
export const removeItemInCheckout = (id) => {
  return {
    type: "REMOVE_ITEM_IN_CHECKOUT",
    payload: id,
  };
};
