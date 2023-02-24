import ACTIONS from './Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      return { ...state, numberOne: `${numberOne || ""}${payload.digit}` };
    default:
      return state;
  }
};

export default reducer;
