import './index.scss';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div id='notfound'>
      <div className=''>
        <h1>La página que buscas no existe. Intentalo de nuevo.</h1>
        <Link to='/'>Volver al Inicio</Link>
      </div>
    </div>
  );
}
export default index;
