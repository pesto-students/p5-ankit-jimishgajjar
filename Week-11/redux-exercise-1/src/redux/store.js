import { createStore } from "redux";
import { switchReducer } from "./redusers";

const store = createStore(switchReducer);

export default store;
