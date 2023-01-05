import { actions } from "./actions";

const initialState = {
  counter: 0
};

export const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STEP_INC:
      return { ...state, counter: state.counter + 1 };
    case actions.STEP_RESET:
      return { ...state, counter: 0 };
    default:
      return { ...state };
  }
};
