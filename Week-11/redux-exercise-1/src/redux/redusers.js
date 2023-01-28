import { actions } from "./actions";

const initialState = {
  isLightOn: true,
};

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SWITCH:
      return { ...state, isLightOn: !state.isLightOn };
    default:
      return state;
  }
};