import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  return true;
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
