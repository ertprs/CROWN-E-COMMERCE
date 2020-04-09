export const fetchItemsFromFirebase = (collectionsMap) => {
  return {
    type: "FETCH_ITEMS_FROM_FIREBASE",

    payload: collectionsMap,
  };
};
