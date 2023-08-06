import { useContext, useRef } from 'react';
import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';

function AddExpensePage() {
  const { setAmount, setDisc, balanceDispatch, listDispatch } =
    useContext(globalContext);

  const amountRef = useRef(0);
  const discRef = useRef('');

  const { passValidate } = useValidation();

  const ExpenseBtnClickListner = () => {
    setAmount(amountRef.current.value);
    setDisc(discRef.current.value);

    let pass = passValidate(amountRef.current.value, discRef.current.value);

    console.log(pass);
    pass && balanceDispatch({ type: 'expense' });
    pass && listDispatch({ type: 'expense' });
  };
  return (
    <>
      <input type="number" placeholder="Amount" ref={amountRef} />
      <input type="text" placeholder="Description" ref={discRef} />
      <button onClick={ExpenseBtnClickListner}>Expense</button>
    </>
  );
}

export default AddExpensePage;
