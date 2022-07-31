import './index.scss';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div id='notfound'>
      <div className=''>
        <h1>404 - Not Found!</h1>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  );
}
export default index;
