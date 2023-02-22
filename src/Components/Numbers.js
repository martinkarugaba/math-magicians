import React from 'react';
import { BsDot } from 'react-icons/bs';
import numbers from '../data/numbers-data';

const Numbers = () => (
  <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
    {numbers.map((item) => {
      const { id, text } = item;
      return (
        <div
          className="basis-1/3 flex justify-center items-center bg-slate-300 text-black h-[60px] border-r border-t text-xs cursor-pointer"
          key={id}
        >
          {text}
        </div>
      );
    })}
    <div className="w-[100%] flex justify-start items-center text-xs">
      <div className="basis-2/3 h-[60px] bg-slate-300 flex justify-center border-t border-r items-center cursor-pointer">
        0
      </div>
      <div className="basis-1/3 h-[60px] bg-slate-300 flex justify-center border-t items-center border-r cursor-pointer">
        <BsDot />
      </div>
    </div>
  </div>
);

export default Numbers;
