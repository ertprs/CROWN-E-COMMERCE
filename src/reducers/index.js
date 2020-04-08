import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default persistReducer(persistConfig, reducers);
