import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/combineReducer";

const devExtn = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (f: any) => f;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(thunk), devExtn)
  );
  return store;
};

export default configureStore;
