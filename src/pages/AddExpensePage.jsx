import { useContext, useRef } from 'react';
import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <TextField
        id="filled-basic"
        label="Enter the Amount"
        variant="filled"
        inputRef={amountRef}
      />
      <TextField
        id="filled-basic"
        label="Enter the Discription"
        variant="filled"
        inputRef={discRef}
      />

      <Button variant="contained" onClick={ExpenseBtnClickListner}>
        Add Expense
      </Button>
    </>
  );
}

export default AddExpensePage;
