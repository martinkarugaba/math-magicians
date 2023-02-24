import React from 'react';
// import { BsDot } from 'react-icons/bs';
import numbers from '../data/numbers-data';
import SingleButton from './SingleButton';

const Buttons = () => (
  <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
    {numbers.map((item) => {
      const { id, text } = item;
      return <SingleButton key={id} digit={text} basis="1/3" />;
    })}
    <div className="w-[100%] border border-orange-500 flex justify-start items-center text-xs">
      <SingleButton digit={0} basis="1/3" />
      <SingleButton digit="." basis="2/3" />
    </div>
  </div>
);

export default Buttons;
