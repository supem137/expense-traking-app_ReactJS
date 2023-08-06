import { useReducer, useRef, useState } from 'react';
import TotalDisplayField from '../UI/TotalDisplayField';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  // const { setAmount, setDisc } = useContext(globalContext);
  const navigate = useNavigate();

  const amountRef = useRef(0);
  const discRef = useRef('');

  const [amount, setAmount] = useState(0);
  const [disc, setDisc] = useState('');

  //validating inputs because of without any value pressing inc. and dec. 0 will print
  let pass = false;
  function validation(value, disc) {
    if (!value || !disc) {
      return (pass = false);
    } else {
      return (pass = true);
    }
  }

  // //Reducers --------------------------------------------
  const balanceReducer = (balance, action) => {
    switch (action.type) {
      case 'income':
        return balance + Number(amount);
      case 'expense':
        return balance - Number(amount);
    }
  };

  const listReducer = (list, action) => {
    console.log('ho');
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
    }
  };
  // //------------------------------------------------------

  const [balance, balanceDispatch] = useReducer(balanceReducer, 0);
  const [list, listDispatch] = useReducer(listReducer, {
    transactions: [],
  });

  const IncomeBtnClickListner = () => {
    setAmount(amountRef.current.value);
    setDisc(discRef.current.value);

    validation(amountRef.current.value, discRef.current.value);
    pass && balanceDispatch({ type: 'income' });
    pass && listDispatch({ type: 'income' });
  };
  const ExpenseBtnClickListner = () => {
    setAmount(amountRef.current.value);
    setDisc(discRef.current.value);
    validation(amountRef.current.value, discRef.current.value);
    pass && balanceDispatch({ type: 'expense' });
    pass && listDispatch({ type: 'expense' });
  };

  return (
    <div>
      <TotalDisplayField balance={balance} />

      <button
        onClick={() => {
          navigate('/addincome');
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          navigate('/addexpense');
        }}
      >
        -
      </button>
      <br />
      <input type="text" placeholder="Amount" ref={amountRef} />
      <input type="text" placeholder="Description" ref={discRef} />
      <button onClick={IncomeBtnClickListner}>Income</button>
      <button onClick={ExpenseBtnClickListner}>Expense</button>
      <p>--List--</p>

      {list &&
        list.transactions.map(({ disc, amount, type }, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  {disc} {amount} {type}
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
