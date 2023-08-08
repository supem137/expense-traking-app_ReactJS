import { useContext } from 'react';
import { globalContext } from '../helper/Context';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './TransactionList.module.css';
import IconButton from '@mui/material/IconButton';

function TransactionList() {
  const { list, listDispatch, balanceDispatch } = useContext(globalContext);
  return (
    <>
      {list &&
        list.transactions.map(({ disc, amount, type }, index) => {
          return (
            <div key={index} className={styles.transaction_item}>
              <div className={styles.transaction_info}>
                {disc} {'$'}
                {amount} {type}
              </div>

              <IconButton
                aria-label="delete"
                onClick={() => {
                  listDispatch({ type: 'delete', payload: index });
                  balanceDispatch({
                    type: 'delete',
                    payload: { type: type, amount: amount },
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })}
    </>
  );
}

export default TransactionList;
