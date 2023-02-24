import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ACTIONS from './Actions';
import reducer from './reducer';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const defaultState = {
  numberOne: '',
  numberTwo: '',
  operator: '',
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
