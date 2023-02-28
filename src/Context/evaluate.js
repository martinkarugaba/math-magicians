const evaluate = ({ numberOne, numberTwo, operation }) => {
  const prev = parseFloat(numberOne);
  const current = parseFloat(numberTwo);
  if (prev.isNaN || current.isNaN) return '';

  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case 'x':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      return 'none';
  }
  return computation.toString();
};

export default evaluate;
