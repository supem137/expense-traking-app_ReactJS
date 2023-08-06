import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartDataProviderExpense,
  ChartDataProviderIncome,
} from './ChartDataProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  return (
    <div>
      <div style={{ width: '300px', height: '300px' }}>
        <Doughnut data={ChartDataProviderIncome()} />
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <Doughnut data={ChartDataProviderExpense()} />
      </div>
    </div>
  );
}

export default Chart;
