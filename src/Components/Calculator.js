import React from 'react';
import Digits from './Digits';
import Operators from './Operators';
import Screen from './Screen';
import { useGlobalContext } from '../Context/Context';

const Calculator = () => {
  const { operator } = useGlobalContext();

  return (
    <div className="w-[400px] h-auto">
      <Screen />
      <div className="flex justify-between items-start">
        <Digits />
        <Operators />
      </div>
    </div>
  );
};
export default Calculator;
