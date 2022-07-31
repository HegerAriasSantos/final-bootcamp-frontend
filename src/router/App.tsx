import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { lazy, Suspense, useEffect } from 'react';
import Loading from '~/views/Loading';

const Home = lazy(() => import('../views/Home'));
const NotFound = lazy(() => import('../views/NotFound'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Protected routes */}
          <Route path='/' element={<ProtectedRoute />}>
            <Route element={<Home />} path='/' />
          </Route>
          <Route element={<Register />} path='/register' />
          <Route element={<Login />} path='/login' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
