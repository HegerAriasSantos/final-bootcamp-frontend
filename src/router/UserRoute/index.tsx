import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '~/Context';
import { ROLE_USER } from '~/lib/config';

const useAuth = () => {
  const token = useSelector((state: RootState) => state.User.value?.token);
  const Role = useSelector((state: RootState) => state.User.value?.role);
  return token && Role === ROLE_USER;
};

const AdminRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default AdminRoute;
