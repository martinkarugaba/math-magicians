import React from 'react';
import numbers from '../data/numbers-data';
import SingleButton from './SingleButton';

const Buttons = () => (
  <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
    <div className="flex justify-start items-center w-[100%]">
      <SingleButton
        buttonName="AC"
        bg="bg-slate-300"
        basis="basis-1/3"
      />
      <SingleButton
        buttonName="+/-"
        bg="bg-slate-300"
        basis="basis-1/3"
      />
      <SingleButton
        buttonName="%"
        bg="bg-slate-300"
        basis="basis-1/3"
      />
    </div>
    {numbers.map((item) => {
      const { id, text } = item;
      return (
        <SingleButton
          key={id}
          buttonName={text}
          basis="basis-1/3"
          bg="bg-slate-300"
        />
      );
    })}
    <div className="w-[100%] flex justify-start items-center text-xs">
      <SingleButton
        buttonName="0"
        bg="bg-slate-300"
        basis="basis-1/3"
      />
      <SingleButton
        buttonName="."
        bg="bg-slate-300"
        basis="basis-2/3"
      />
    </div>
  </div>
);

export default Buttons;
