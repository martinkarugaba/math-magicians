import PropTypes from 'prop-types';
import { useGlobalContext } from '../Context/Context';

const OperationButton = ({ operation, basis, bg }) => {
  const { chooseOperation } = useGlobalContext();
  return (
    <button
      type="button"
      className={`basis-${basis} flex justify-center items-center ${bg} hover:bg-orange-500 text-black h-[60px] border-r border-t text-xs cursor-pointer`}
      onClick={() => chooseOperation(operation)}
    >
      {operation}
    </button>
  );
};

export default OperationButton;

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  basis: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
