import Navbar from '~/components/Navbar';
import { Outlet } from 'react-router-dom';

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};

export default index;
