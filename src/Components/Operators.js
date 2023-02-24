import React from 'react';
import operators from '../data/operators-data';

const Operators = () => (
  <div className="flex flex-col justify-start w-[25%]">
    {operators.map((item) => {
      const { id, text } = item;
      return (
        <button
          type="button"
          className="flex justify-center items-center bg-orange-400 border-t w-[100%] h-[60px] text-black text-xs cursor-pointer"
          key={id}
        >
          {text}
        </button>
      );
    })}
  </div>
);

export default Operators;
