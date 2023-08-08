import { useContext } from 'react';
import TotalDisplayField from '../UI/TotalDisplayField';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../helper/Context';
import Chart from '../components/Chart';
import './HomePage.css';
//MUI Component Import
import Button from '@mui/material/Button';
import ListAccordion from '../UI/ListAccordion';

function HomePage() {
  const { balance } = useContext(globalContext);
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <Chart />
      <TotalDisplayField balance={balance} />

      <div className="button-container">
        <Button
          variant="outlined"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '20px',
          }}
          onClick={() => {
            navigate('/addincome');
          }}
        >
          +
        </Button>
        <Button
          variant="outlined"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          onClick={() => {
            navigate('/addexpense');
          }}
        >
          -
        </Button>
      </div>

      <ListAccordion />
    </div>
  );
}

export default HomePage;
