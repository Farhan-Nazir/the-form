import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const formResult = store.getState().formReducer.data;
  return window.localStorage.setItem("the-form", JSON.stringify(formResult));
});

export default store;
