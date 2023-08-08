import { useContext, useRef } from 'react';
import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './HomePage.module.css';
import InputAdornment from '@mui/material/InputAdornment';

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
    <div className={styles.main_container}>
      <TextField
        id="filled-basic"
        label="Enter the Amount"
        variant="filled"
        inputRef={amountRef}
        type="number"
        sx={{
          width: '300px',
          padding: '0 0 10px 0',
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        id="filled-basic"
        label="Enter the Discription"
        variant="filled"
        inputRef={discRef}
        sx={{
          width: '300px',
          padding: '0 0 10px 0',
        }}
      />

      <Button variant="contained" onClick={ExpenseBtnClickListner}>
        Add Expense
      </Button>
    </div>
  );
}

export default AddExpensePage;
