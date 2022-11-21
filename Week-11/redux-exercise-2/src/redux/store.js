import { createStore } from "redux";
import { stepReducer } from "./reduser";

const store = createStore(stepReducer);

export default store;
