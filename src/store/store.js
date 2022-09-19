// // import { configureStore } from "@reduxjs/toolkit";
// // root reducer importing
// import { compose, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { createStore } from "redux";
// import { rootReducer } from "./root-reducer";
// const middlewares = [logger];
// // import thunk from "redux-thunk";

// // const composeEnhancer = compose(applyMiddleware(...middlewares));

// // export const store = configureStore({
// //   reducer: rootReducer,
// //   middleware: middlewares,
// //   enhancers: composeEnhancer,
// // });

// // export const store = createStore(rootReducer, undefined, composeEnhancer);

import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlewares = [thunk, logger];

// const composeenhancer = compose(applyMiddleware(...middlewares));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(...middlewares))
);
store.subscribe(() => {
  // save a copy to localStorage
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
