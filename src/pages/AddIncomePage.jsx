import { useRef, useContext } from 'react';
import { globalContext } from '../helper/Context';
import useValidation from '../components/useValidation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <TextField
        id="filled-basic"
        label="Enter the Amount"
        variant="filled"
        inputRef={amountRef}
      />
      <TextField
        id="filled-basic"
        label="Enter the Ducription"
        variant="filled"
        inputRef={discRef}
      />

      <Button variant="contained" onClick={IncomeBtnClickListner}>
        Add Income
      </Button>
    </>
  );
}

export default AddIncomePage;
