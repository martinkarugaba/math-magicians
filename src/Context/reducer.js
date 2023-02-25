import ACTIONS from './Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (action.payload.digit === '0' && state.numberOne === '0') return state;
      if (action.payload.digit === '.' && state.numberOne.includes('.')) return state;
      return {
        ...state,
        numberOne: `${state.numberOne || ''}${action.payload.digit}`,
      };
    default:
      return state;
  }
};

export default reducer;
