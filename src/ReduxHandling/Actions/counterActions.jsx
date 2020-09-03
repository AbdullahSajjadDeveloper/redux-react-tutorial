const ADD_COUNTER = "ADD_COUNTER";
const SUB_COUNTER = "SUB_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

const addAction = () => {
  return { type: ADD_COUNTER };
};

const subAction = () => {
  return { type: SUB_COUNTER };
};

const resetAction = () => {
  return { type: RESET_COUNTER };
};

export { addAction };
export { subAction };
export { resetAction };
export { ADD_COUNTER };
export { SUB_COUNTER };
export { RESET_COUNTER };
