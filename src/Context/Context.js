import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ACTIONS from './Actions';
import reducer from './reducer';

const defaultState = {
  numberOne: 0,
  numberTwo: 0,
  operator: '',
};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addDigit = (digit) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  const chooseOperation = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { digit: 1 },
    });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addDigit, chooseOperation }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
