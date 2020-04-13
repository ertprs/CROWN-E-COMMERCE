import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../firebase/Firebase";

export const fetchItemsStart = () => {
  return {
    type: "FETCH_ITEMS_START",
  };
};

export const fetchItemsFailure = (errorMessage) => {
  return {
    type: "FETCH_ITEMS_FAILURE",
    payload: errorMessage,
  };
};

export const fetchItemsFromFirebase = (collectionsMap) => {
  return {
    type: "FETCH_ITEMS_FROM_FIREBASE",

    payload: collectionsMap,
  };
};

export const fetchItemsFromFirebaseAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchItemsStart);

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchItemsFromFirebase(collectionsMap));
      })
      .catch((error) => dispatch(fetchItemsFailure(error)));
  };
};
