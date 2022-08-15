import "./styles.scss";
import Logo from '~/assets/img/barbero.jpeg'
import { Link } from "react-router-dom";
import Links from './Links';

const Navbar = () => {

  return (

    <nav>
      <input type="checkbox" id="check"></input>
      <label className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <Link to="/" className="enlace">
        <img src={Logo} className="logo" />
      </Link>

      <Links />
    </nav>
  );
}

export default Navbar;