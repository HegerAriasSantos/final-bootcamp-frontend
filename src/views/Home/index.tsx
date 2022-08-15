import Footer from "~/components/Footer";
import "./styles.scss";
import Logo from '~/assets/img/icono-barba.jpg'
import { Link } from "react-router-dom";




function App() {
  return (
 
      <div className="main-page">
        <div className="shadow">
          <div className="container">
            <div className="icono">
              <img src={Logo} alt="" className="imagen-barba"/>
              <div className="logo-text">
                <h1>You need to look good and feel good! </h1>
                <p>Make your appointment online</p>
                <Link to="/Services">
                 <button className="buttom">Service</button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
  
      </div>
    


  );
}

export default App;
