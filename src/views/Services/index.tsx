//import Boy from '~/assets/img/2.png'
import { useEffect, useState } from 'preact/hooks';
import silla from '~/assets/img/barbero-png.png'
import Axios from 'axios';
//import Degradado2 from '~/assets/img/3.png'
// Degradado3 from '~/assets/img/4.png'
import './index.scss';

const [serviceList, setServiceList] = useState();
// useEffect(()=>{
  
// })

const Services = () => {
  return (
    <div className="services-contain">


      <div className="section1">
      <div className="div-servicio">
          <div className="new">
              <p>Offer</p>
            </div>
            <div className="servicio2">
          
            {/* <img src={Degradado} alt="" /> */}
            <div className="info-service">
              <p>Name Corte</p>
              <p><span>$000.00</span></p>
            </div>
            </div>
          </div>
      </div>



      <div className="section2">
        <div className="contenido">
          <div className="shadow">
            <img src={silla} alt="" />
          <h2> "Available services"</h2>
              <p>Barbershop</p>

          </div>
        </div>

      </div>
    </div>
  );
}


const ServicesCart = () =>{

}

export default Services;