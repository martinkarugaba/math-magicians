import React from 'react';
import operators from '../data/operators-data';

const Operators = () => (
  <div className="flex flex-col justify-start">
    {operators.map((item) => {
      const { id, text } = item;
      return (
        <div className="bg-orange-400 border px-2 py-3 text-black" key={id}>
          {text}
        </div>
      );
    })}
  </div>
);

export default Operators;
