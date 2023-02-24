import PropTypes from 'prop-types';
import { useGlobalContext } from '../Context/Context';

const DigitButton = ({ digit }) => {
  const { addDigit } = useGlobalContext();
  return (
    <button
      type="button"
      className="basis-1/3 flex justify-center items-center bg-slate-300 hover:bg-slate-400 text-black h-[60px] border-r border-t text-xs cursor-pointer"
      onClick={() => addDigit(digit)}
    >
      {digit}
    </button>
  );
};

export default DigitButton;

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
};
