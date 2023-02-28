import ACTIONS from './Actions';
import evaluate from './evaluate';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overWrite) {
        return { ...state, numberOne: action.payload.digit, overWrite: false };
      }
      if (action.payload.digit === '0' && state.numberOne === '0') return state;
      if (
        action.payload.digit === '.'
        && state.numberOne.includes('.')
      ) return state;

      return {
        ...state,
        numberOne: `${state.numberOne || ''}${action.payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.numberOne === null && state.numberTwo === null) {
        return state;
      }
      if (state.numberOne === null) {
        return { ...state, operation: action.payload.operation };
      }
      if (state.numberTwo === null) {
        return {
          ...state,
          operation: action.payload.operation,
          numberTwo: state.numberOne,
          numberOne: null,
        };
      }
      return {
        ...state,
        numberTwo: evaluate(state),
        operation: action.payload.operation,
        numberOne: null,
      };
    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.numberOne === null
        || state.numberTwo === null
        || state.operation === null
      ) {
        return state;
      }

      return {
        ...state,
        overWrite: true,
        numberTwo: null,
        operation: null,
        numberOne: evaluate(state),
      };
    default:
      return state;
  }
};

export default reducer;
