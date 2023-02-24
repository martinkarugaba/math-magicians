import ACTIONS from './Actions';

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        numberOne: `${state.numberOne || ''}${action.payload.digit}`,
      };
    default:
      return state;
  }
};

export default reducer;
