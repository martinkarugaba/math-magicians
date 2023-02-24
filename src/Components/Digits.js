import React from 'react';
import { BsDot } from 'react-icons/bs';
import numbers from '../data/numbers-data';

const Numbers = () => (
  <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
    {numbers.map((item) => {
      const { id, text } = item;
      return (
        <button
          type="button"
          className="basis-1/3 flex justify-center items-center bg-slate-300 hover:bg-slate-400 text-black h-[60px] border-r border-t text-xs cursor-pointer"
          key={id}
        >
          {text}
        </button>
      );
    })}
    <div className="w-[100%] flex justify-start items-center text-xs">
      <button
        type="button"
        className="basis-2/3 h-[60px] bg-slate-300 flex justify-center border-t border-r items-center cursor-pointer"
      >
        0
      </button>
      <button
        type="button"
        className="basis-1/3 h-[60px] bg-slate-300 flex justify-center border-t items-center border-r cursor-pointer"
      >
        <BsDot />
      </button>
    </div>
  </div>
);

export default Numbers;
