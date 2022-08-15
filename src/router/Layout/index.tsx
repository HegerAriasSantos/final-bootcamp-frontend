import Navbar from '~/components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer';

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
