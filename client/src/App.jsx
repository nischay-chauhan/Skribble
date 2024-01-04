import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import Privacy from './components/Policy/Privacy';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import License from './components/License/License';
import NotFound from './components/Notfound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/register',
      element: <Layout><Register /></Layout>,
    },
    {
      path: '/login',
      element: <Layout><Login /></Layout>,
    },
    {
      path: '/about',
      element: <Layout><About /></Layout>,
    },
    {
      path: '/contact',
      element: <Layout><Contact /></Layout>,
    },
    {
      path: '/profile/:id',
      element: <Layout><Profile /></Layout>,
    },
    {
      path: '/privacy-policy',
      element: <Layout><Privacy /></Layout>,
    },
    {
      path : '/forgot-password',
      element : <Layout><ForgotPassword /></Layout>
    },
    {
      path : '/reset-password/:id/:resetToken',
      element : <Layout><ResetPassword /></Layout>
    },
    {
      path : '/licensing',
      element : <Layout><License /></Layout>
    },
    {
      path: '*',
      element: <Layout><NotFound /></Layout>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
