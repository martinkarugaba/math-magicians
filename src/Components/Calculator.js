import React from 'react';
import Buttons from './Buttons';
import Operators from './Operators';
import Display from './Display';

const Calculator = () => (
  <div className="w-[400px] h-auto">
    <Display />
    <div className="flex justify-between items-start">
      <Buttons />
      <Operators />
    </div>
  </div>
);
export default Calculator;
