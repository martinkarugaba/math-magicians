import PropTypes from 'prop-types';
import { useGlobalContext } from '../Context/Context';

const OperationButton = ({ operation }) => {
  const { chooseOperation } = useGlobalContext();
  return (
    <button
      type="button"
      className="flex justify-center items-center bg-orange-400 hover:bg-orange-500 border-t w-[100%] h-[60px] text-black text-xs cursor-pointer"
      onClick={() => chooseOperation(operation)}
    >
      {operation}
    </button>
  );
};

export default OperationButton;

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
};
