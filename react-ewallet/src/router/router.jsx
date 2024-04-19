import { createBrowserRouter } from 'react-router-dom';
import Home from '../assets/routes/Home/Home';
import AddCard from '../assets/routes/AddCard/AddCard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addcard',
    element: <AddCard />
  },
]);

export default router;