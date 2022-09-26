import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Context';
import { setUser } from '~/Context/Reducers/User';

const Intercerptors = (props: any) => {
  const token = useSelector((state: RootState) => state.User.value?.token);
  const dispatch = useDispatch();
  dispatch(setUser());

  axios.interceptors.request.use((config: any) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  axios.interceptors.response.use((response) => {
    return response;
  });

  return <>{props.children}</>;
};
export default Intercerptors;
