import { useContext } from 'react';
import { globalContext } from '../helper/Context';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function TransactionList() {
  const { list, listDispatch, balanceDispatch } = useContext(globalContext);
  return (
    <>
      {list &&
        list.transactions.map(({ disc, amount, type }, index) => {
          return (
            <div key={index}>
              <div>
                {disc} {amount} {type}
              </div>
              <Button
                variant="outlined"
                onClick={() => {
                  listDispatch({ type: 'delete', payload: index });
                  balanceDispatch({
                    type: 'delete',
                    payload: { type: type, amount: amount },
                  });
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          );
        })}
    </>
  );
}

export default TransactionList;
