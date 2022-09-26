import './index.scss';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className='notFound'>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <h1>Oops! Something went wrong!</h1>
      <div>
        <Link to='/' className="btn d-flex align-items-center justify-content-center">Return to Home</Link>
      </div>
    </div>
  );
}
export default index;
