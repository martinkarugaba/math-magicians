import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ACTIONS from './Actions';
import reducer from './reducer';

const defaultState = {
  numberOne: null,
  numberTwo: null,
  operation: null,
  obj: { total: null, next: null, operation: null },
};
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addDigit = (digit) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  const chooseOperation = (operation) => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation },
    });
    console.log(operation);
  };

  const allClear = () => {
    dispatch({
      type: ACTIONS.CLEAR,
    });
  };

  const evaluate = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addDigit,
        chooseOperation,
        allClear,
        evaluate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
