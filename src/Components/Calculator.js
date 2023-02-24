import React from 'react';
import Buttons from './Buttons';
import Operators from './Operators';
import Screen from './Screen';

const Calculator = () => (
  <div className="w-[400px] h-auto">
    <Screen />
    <div className="flex justify-between items-start">
      <Buttons />
      <Operators />
    </div>
  </div>
);
export default Calculator;
