import { createStore } from "redux";

const reduseerFn = (state = { isLightOn: true }, action) => {
  if (action.type === "SWITCH") {
    return { isLightOn: !state.isLightOn };
  }
  return state;
};

const store = createStore(reduseerFn);

export default store;
