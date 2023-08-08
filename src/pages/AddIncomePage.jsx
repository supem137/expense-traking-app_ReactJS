import { useRef, useContext } from 'react';
import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './HomePage.module.css';
import InputAdornment from '@mui/material/InputAdornment';

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
        label="Enter the Ducription"
        variant="filled"
        inputRef={discRef}
        sx={{
          width: '300px',
          padding: '0 0 10px 0',
        }}
      />

      <Button variant="contained" onClick={IncomeBtnClickListner}>
        Add Income
      </Button>
    </div>
  );
}

export default AddIncomePage;
