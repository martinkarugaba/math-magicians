import PropTypes from 'prop-types';
import { useGlobalContext } from '../Context/Context';

const DigitButton = ({ basis, buttonName, bg }) => {
  const { handleClick } = useGlobalContext();

  return (
    <button
      type="button"
      className={`${basis} flex justify-center items-center ${bg} hover:bg-slate-400 text-black h-[60px] border-r border-t text-xs cursor-pointer`}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  );
};

export default DigitButton;

DigitButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  basis: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
