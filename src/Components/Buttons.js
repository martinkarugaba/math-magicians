import React from 'react';
import { useGlobalContext } from '../Context/Context';
// import { BsDot } from 'react-icons/bs';
import numbers from '../data/numbers-data';
import OperationButton from './OperatonButton';
import SingleButton from './SingleButton';

const Buttons = () => {
  const { allClear } = useGlobalContext();
  return (
    <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
      <div className="flex justify-start items-center w-[100%]">
        <button
          type="button"
          className="basis-1/3 flex justify-center items-center bg-slate-300 hover:bg-orange-500 text-black h-[60px] border-r border-t text-xs cursor-pointer"
          onClick={() => allClear()}
        >
          AC
        </button>
        <OperationButton
          operation="+/-"
          basis="1/3"
          bg="bg-slate-300"
        />
        <OperationButton
          operation="%"
          basis="1/3"
          bg="bg-slate-300"
        />
      </div>
      {numbers.map((item) => {
        const { id, text } = item;
        return <SingleButton key={id} digit={text} basis="1/3" />;
      })}
      <div className="w-[100%] flex justify-start items-center text-xs">
        <SingleButton digit="0" basis="1/3" />
        <SingleButton digit="." basis="2/3" />
      </div>
    </div>
  );
};

export default Buttons;
