import { useContext } from 'react';
import TotalDisplayField from '../UI/TotalDisplayField';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../helper/Context';
import Chart from '../components/Chart';

function HomePage() {
  const { balance, list, listDispatch, balanceDispatch } =
    useContext(globalContext);
  const navigate = useNavigate();

  return (
    <div>
      <Chart />
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
      <p>--List--</p>
      {console.log(list)}

      {list &&
        list.transactions.map(({ disc, amount, type }, index) => {
          return (
            <div key={index}>
              {console.log(disc, amount, type, index)}
              <ul>
                <li>
                  {disc} {amount} {type}
                  <button
                    onClick={() => {
                      listDispatch({ type: 'delete', payload: index });
                      balanceDispatch({
                        type: 'delete',
                        payload: { type: type, amount: amount },
                      });
                    }}
                  >
                    delete
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
