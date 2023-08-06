import { RouterProvider } from 'react-router-dom';
import { router } from './routers/routers';
import { globalContext } from './helper/Context';
import { useState, useReducer, useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [disc, setDisc] = useState('');

  // Get data from local storage or use the initial state
  const initialTransactions = JSON.parse(localStorage.getItem('data')) || [];
  const initialBalance = JSON.parse(localStorage.getItem('balance')) || 0;

  // //Reducers --------------------------------------------
  const balanceReducer = (balance, action) => {
    switch (action.type) {
      case 'income':
        return balance + Number(amount);
      case 'expense':
        return balance - Number(amount);
      case 'delete':
        if (action.payload.type === 'income') {
          return balance - Number(action.payload.amount);
        } else if (action.payload.type === 'expense') {
          return balance + Number(action.payload.amount);
        }
    }
  };

  const listReducer = (list, action) => {
    console.log(action);
    switch (action.type) {
      case 'income':
        return {
          // ...list,
          transactions: [
            ...list.transactions,
            { disc: disc, amount: amount, type: 'income' },
          ],
        };
      case 'expense':
        return {
          transactions: [
            ...list.transactions,
            { disc: disc, amount: amount, type: 'expense' },
          ],
        };
      case 'delete': {
        initialTransactions.splice(`${action.payload}`, 1);

        return {
          transactions: initialTransactions,
        };
      }
    }
  };
  // //------------------------------------------------------

  const [balance, balanceDispatch] = useReducer(balanceReducer, initialBalance);
  const [list, listDispatch] = useReducer(listReducer, {
    transactions: initialTransactions,
  });

  console.log(initialTransactions);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(list.transactions));
    localStorage.setItem('balance', balance);
  }, [list, balance]);

  return (
    <globalContext.Provider
      value={{
        setAmount,
        setDisc,
        balance,
        list,
        balanceDispatch,
        listDispatch,
      }}
    >
      <RouterProvider router={router} />
    </globalContext.Provider>
  );
}

export default App;
