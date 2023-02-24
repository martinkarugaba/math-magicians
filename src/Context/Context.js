import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [operator, setOperator] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        numberOne,
        setNumberOne,
        numberTwo,
        setNumberTwo,
        operator,
        setOperator,
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
