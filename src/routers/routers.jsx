import { createBrowserRouter } from 'react-router-dom';
import AddIncomePage from '../pages/AddIncomePage';
import HomePage from '../pages/HomePage';
import AddExpensePage from '../pages/AddExpensePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/addincome',
    element: <AddIncomePage />,
  },
  {
    path: '/addexpense',
    element: <AddExpensePage />,
  },
]);
