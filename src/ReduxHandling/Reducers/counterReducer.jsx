import { ADD_COUNTER } from "../Actions/counterActions";
import { SUB_COUNTER } from "../Actions/counterActions";
import { RESET_COUNTER } from "../Actions/counterActions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case SUB_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case RESET_COUNTER:
      return { ...state, counter: (state.counter = 0) };
    default:
      return state;
  }
};

export default counterReducer;
export { ADD_COUNTER };
export { SUB_COUNTER };
