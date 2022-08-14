import "./styles.scss";
import Logo from '../../assets/img/barbero.jpeg'
const Navbar = () => {
  return(
    <div>
    <nav>
        <input type="checkbox" id="check"></input>
        <label className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <a href="#" className="enlace">

            <img src={Logo} className="logo"/>
        </a>
        <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">About us</a></li>
        </ul>
    </nav>

    </div>
  );
}

export default Navbar;