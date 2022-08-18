import silla from '~/assets/img/barbero-png.png'
import './index.scss';
import Carousel from 'react-bootstrap/Carousel';


const CarouselService = () =>{
  let services = [
    {
      "name": "Recortada de Barba",
      "price": 150
    },
    {
      "name": "Recorada Completa",
      "price": 400
    }
  ]

  return(
    <Carousel controls={false} indicators={false}>
      {services.map((item, index) => {
        return(
          <Carousel.Item>
            <div className="new">
              <p>Offer #{index}</p>
            </div>
            <div className="servicio2">
              <div className="info-service">
                <p>{item.name}</p>
                <p><span>${item.price}.00</span></p>
              </div>
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
 )
}

const Services = () => {
  return (
    <div className="services-contain">

      <div className="section1">
        <CarouselService/>
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

export default Services;