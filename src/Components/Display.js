import React from 'react';
import { useGlobalContext } from '../Context/Context';

const Screen = () => {
  const { result } = useGlobalContext();
  const { next, total } = result;

  return (
    <div className="w-[100%] p-4 py-4 bg-gray-700 h-[100px] min-h-[60px] flex flex-col justify-around items-end break-words break-all">
      <p className="text-[1.5rem] text-[#EEEEEE]">
        {next || total || 0}
      </p>
    </div>
  );
};

export default Screen;
