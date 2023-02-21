import React from 'react';
import numbers from '../data/numbers-data';

const Numbers = () => (
  <div className="flex justify-start items-center flex-wrap">
    {numbers.map((item) => {
      const { id, text } = item;
      return <div className="bg-slate-300 text-black px-6 py-2 border" key={id}>{text}</div>;
    })}
  </div>
);

export default Numbers;
