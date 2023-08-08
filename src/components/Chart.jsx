import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartDataProviderExpense,
  ChartDataProviderIncome,
} from './ChartDataProvider';

import styles from './Chart.module.css';

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
    <div className={styles.container}>
      <div className={styles.income_chart_container}>
        <Doughnut data={ChartDataProviderIncome()} options={optionsIncome} />
      </div>
      <div className={styles.expense_chart_container}>
        <Doughnut data={ChartDataProviderExpense()} options={optionsExpense} />
      </div>
    </div>
  );
}

export default Chart;
