import { useContext } from 'react';
import { globalContext } from '../helper/Context';

export function ChartDataProviderIncome() {
  let data = {
    labels: [],
    datasets: [
      {
        label: 'Rs',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const { list } = useContext(globalContext);

  let labelData = [];
  let amountDataIncome = [];

  list.transactions.filter((ele) => {
    if (ele.type === 'income') {
      console.log('in: ' + ele.disc, ele.type);
      labelData.push(ele.disc);
      amountDataIncome.push(ele.amount);
    }
  });
  data.labels = labelData;
  data.datasets[0].data = amountDataIncome;

  return data;
}
export function ChartDataProviderExpense() {
  let data = {
    labels: [],
    datasets: [
      {
        label: 'Rs',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const { list } = useContext(globalContext);

  let labelData = [];
  let amountDataExpense = [];

  list.transactions.filter((ele) => {
    if (ele.type === 'expense') {
      labelData.push(ele.disc);
      amountDataExpense.push(ele.amount);
    }
  });
  data.labels = labelData;
  data.datasets[0].data = amountDataExpense;

  return data;
}
