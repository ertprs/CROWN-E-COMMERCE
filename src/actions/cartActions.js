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

export const updateItemCount = (itemCount) => {
  return {
    type: "UPDATE_ITEM_COUNT",
    payload: itemCount,
  };
};
