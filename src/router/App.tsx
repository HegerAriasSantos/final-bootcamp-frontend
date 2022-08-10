import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoute';
import UserRoutes from './UserRoute';
import { lazy, Suspense, useEffect } from 'react';
import Loading from '~/views/Loading';

const Home = lazy(() => import('../views/Home'));
const NotFound = lazy(() => import('../views/NotFound'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));
const Bill = lazy((() => import('../views/Bill')))

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Protected Admin routes */}
          <Route path='/' element={<AdminRoutes />}>
            <Route element={<Home />} path='/admin' />
          </Route>
          {/* Protected Client routes */}
          <Route path='/' element={<UserRoutes />}>
            <Route element={<Home />} path='/user' />
          </Route>
          {/* Public routes */}
          <Route element={<Register />} path='/register' />
          <Route element={<Login />} path='/login' />
          <Route element={<NotFound />} path='*' />
          <Route element={<Bill />} path='/bill' />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
