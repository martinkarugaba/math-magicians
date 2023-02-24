import React from 'react';
import Digits from './Digits';
import Operators from './Operators';
import Screen from './Screen';

const Calculator = () => (
  <div className="w-[400px] h-auto">
    <Screen />
    <div className="flex justify-between items-start">
      <Digits />
      <Operators />
    </div>
  </div>
);
export default Calculator;
