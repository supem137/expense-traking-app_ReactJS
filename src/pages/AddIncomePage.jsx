import { useRef, useContext } from 'react';

import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';

function AddIncomePage() {
  const { setAmount, setDisc, balanceDispatch, listDispatch } =
    useContext(globalContext);

  const amountRef = useRef();
  const discRef = useRef('');

  const { passValidate } = useValidation();

  const IncomeBtnClickListner = () => {
    setAmount(amountRef.current.value);
    setDisc(discRef.current.value);

    let pass = passValidate(amountRef.current.value, discRef.current.value);

    pass && balanceDispatch({ type: 'income' });
    pass && listDispatch({ type: 'income' });
  };

  return (
    <>
      <input type="number" placeholder="Amount" ref={amountRef} />
      <input type="text" placeholder="Description" ref={discRef} />
      <button onClick={IncomeBtnClickListner}>Income</button>
    </>
  );
}

export default AddIncomePage;
