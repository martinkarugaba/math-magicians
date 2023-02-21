import React from 'react';
import operators from '../data/operators-data';

const Operators = () => (
  <div className="flex flex-col justify-start w-[25%]">
    {operators.map((item) => {
      const { id, text } = item;
      return (
        <div
          className="flex justify-center items-center bg-orange-400 border-b w-[100%] h-[45px] text-black text-xs cursor-pointer"
          key={id}
        >
          {text}
        </div>
      );
    })}
  </div>
);

export default Operators;
