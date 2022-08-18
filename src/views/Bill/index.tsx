import { useEffect, useState } from "react"
import "./Style.scss"
import logo from '~/assets/img/barbero.png';
import { useParams } from "react-router";
import Print from "~/assets/icons/Print";


const Invoice = () => {
  const [total, setTotal] = useState(0);
  const params = useParams();
  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
  console.log("%c params", 'color:red; background:yellow; font-size:20px;', params);
  let services = [
    {
      "name": "Recortada de Barba",
      "price": 150,
      "Date": output
    },
    {
      "name": "Recorada Completa",
      "price": 400,
      "Date": output
    }
  ]
  useEffect(() => {
    let total = services.reduce((acc, curr) => acc + curr.price, 0);
    setTotal(total);
  }, [])


  return (
    <div className="Bill">
      <main className="main">
        <div className="container">
          <img src={logo} alt='Logo' style={{ width: '250px' }} />
          <div className="client-contain">
            <p className="client"><strong>Cliente:  </strong> Ronny Araujo</p>
          </div>

          <table>
            <thead>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
            </thead>
            <tbody>
              {services.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.Date}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="total">
                <td>Total</td>
                <td>${total}</td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <a onClick={() => {
                    window.print();
                  }} href="#">
                    <Print />
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main >
    </div >
  )
}
export default Invoice