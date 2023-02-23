import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "../features/user";
import todoReducer from "../features/todos";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: persistedTodoReducer,
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
