import "./styles.scss";
import Logo from '~/assets/img/icono-barba.jpg'



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
                <button className="buttom">Quote</button>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    


  );
}

export default App;
