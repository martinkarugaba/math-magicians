import React from 'react';
import operators from '../data/operators-data';
import OperationButton from './OperatonButton';

const Operators = () => (
  <div className="flex flex-col justify-start w-[25%]">
    {operators.map((item) => {
      const { id, text } = item;
      return <OperationButton key={id} operation={text} bg="orange-400" />;
    })}
  </div>
);

export default Operators;
