import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';
import Screen from './Screen';

const Calculator = () => (
  <div className="border border-orange-500 w-[300px] h-[300px]">
    <Screen />
    <div className="flex">
      <Numbers />
      <Operators />
    </div>
  </div>
);

export default Calculator;
