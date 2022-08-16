import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoute';
import UserRoutes from './UserRoute';
import Layout from './Layout';
import { lazy, Suspense, useEffect } from 'react';
import Loading from '~/views/Loading';
import Quotes from '~/views/Quotes';

const Home = lazy(() => import('~/views/Home'));
const NotFound = lazy(() => import('~/views/NotFound'));
const Register = lazy(() => import('~/views/Register'));
const Login = lazy(() => import('~/views/Login'));
const Services = lazy(() => import('~/views/Services'));
const ServicesAdmin = lazy(() => import('~/views/ServicesAdmin'));
const ServicesForm = lazy(() => import('~/components/ServicesForm'));
const About = lazy(() => import('~/views/About'));
const Bill = lazy((() => import('~/views/Bill')));
const Invoices = lazy((() => import('~/views/Invoices')))

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* layout */}
          <Route path='/' element={<Layout />}>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Services />} path='/services' />
            <Route element={<Register type="user" />} path='/register' />
            <Route element={<Login />} path='/login' />
            <Route element={<Quotes />} path='/quotes' />

            {/* Protected Admin routes */}
            <Route path='/' element={<AdminRoutes />}>
              <Route element={<Invoices />} path='/admin/invoice' />
              <Route element={<ServicesAdmin />} path='/admin/services' />
              <Route element={<ServicesForm type='edit' />} path='/admin/services/edit/:id' />
              <Route element={<ServicesForm type='create' />} path='/admin/services/create' />
              <Route element={<Bill />} path='/admin/invoice/:id' />
              <Route element={<Register type="admin" />} path='/admin/register' />
              {/*<Route element={<Quotes />} path='/admin/quotes' />*/}
            </Route>
            {/* Protected Client routes */}
            <Route path='/' element={<UserRoutes />}>
              <Route element={<Home />} path='/user' />
            </Route>
            <Route element={<NotFound />} path='*' />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
};

export default App;
