import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartDataProviderExpense,
  ChartDataProviderIncome,
} from './ChartDataProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const optionsIncome = {
    cutout: '70%',
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
      legend: {
        display: false, // Hide the legend (labels)
      },
    },
  };
  const optionsExpense = {
    cutout: '40%',
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
      legend: {
        display: false, // Hide the legend (labels)
      },
    },
  };
  return (
    <div className="container">
      <div className="income-chart-container">
        <Doughnut data={ChartDataProviderIncome()} options={optionsIncome} />
      </div>
      <div className="expense-chart-container">
        <Doughnut data={ChartDataProviderExpense()} options={optionsExpense} />
      </div>
    </div>
  );
}

export default Chart;
