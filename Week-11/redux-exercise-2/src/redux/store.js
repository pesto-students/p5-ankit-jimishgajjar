import { createStore } from "redux";
import { stepReducer } from "./reducers";

const store = createStore(stepReducer);

export default store;
