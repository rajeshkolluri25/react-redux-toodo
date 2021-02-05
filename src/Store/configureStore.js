import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../Reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState = []) => {
  let store = createStore(persistedReducer, preloadedState);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
