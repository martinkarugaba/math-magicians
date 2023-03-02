import calculate from '../logic/calculate';

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_CLICK':
      console.log(state.result);
      return {
        ...state,
        result: calculate(state.result, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
