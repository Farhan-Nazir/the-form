import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(
    rootReducers,
    window.devToolsExtension && window.devToolsExtension()
  );
  
 export default store; 