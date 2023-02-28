import React from 'react';
import { useGlobalContext } from '../Context/Context';

const Screen = () => {
  const { numberOne, numberTwo, operation } = useGlobalContext();

  return (
    <div className="w-[100%] p-4 py-4 bg-gray-700 h-[100px] min-h-[60px] flex flex-col justify-around items-end break-words break-all">
      <p className="text-[1.5rem] text-[#EEEEEE]">
        {numberTwo}
        {operation}
      </p>
      <p className="text-[2.5rem] font-medium text-white">
        {numberOne}
      </p>
    </div>
  );
};

export default Screen;
