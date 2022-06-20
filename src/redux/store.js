import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;

//createStore에는 첫 인자로 reducer를 받음