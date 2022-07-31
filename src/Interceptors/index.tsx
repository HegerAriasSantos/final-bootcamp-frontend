import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Context';
import { setToken } from '~/Context/Reducers/Token';

const Intercerptors = (props: any) => {
  const token = useSelector((state: RootState) => state.token.value);
  const dispatch = useDispatch();
  dispatch(setToken());

  axios.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  axios.interceptors.response.use((response) => {
    return response;
  });

  return <>{props.children}</>;
};
export default Intercerptors;
