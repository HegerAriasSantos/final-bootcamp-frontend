import { useEffect } from "react"
import "~/views/Bill/Style.scss"
import logo from '~/views/Logo.png';
import {Link}  from "react-router-dom"


let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

const Invoice = () => {
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
        let data = "";
        let tsum = 0;
        services.forEach(item => {
            data += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
               <td>${item.Date}</td>

            </tr>    
            `;
            tsum += item.price;
        })
        let t_body = document.querySelector("#t-body");
        if (t_body !== null) t_body.innerHTML = data;

        let total = document.querySelector("#total");

        if (total !== null)
            total.innerHTML = "$" + tsum.toString();

    }, [])

    
   function Eliminar (){
    let data2 = " "
    data2 += `
         
    <svg onClick={Eliminar} xmlns="http://www.w3.org/2000/svg" className="Buttom icon icon-tabler icon-tabler-printer" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="#084A7F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                                            <rect x="7" y="13" width="10" height="8" rx="2" />
                                    </svg>
   
    
    `;

    let borrar = document.querySelector(".link");
    if (borrar !== null) borrar.innerHTML = " ";

    setTimeout(function(){
        if (borrar !== null) borrar.innerHTML = data2
    }, 1000);
    javascript:window.print()
   }


    return (
        <>
            <main className="main">
                <div className="container">
                    <img src={logo} alt='Logo' className="Logo"  />
                    <div className="client-contain">
                         <p className="client"><strong>Cliente:  </strong> Ronny Araujo</p>
                    </div>

                   
                    <table>
                        <thead>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>

                        </thead>
                        <tbody id="t-body">
                        </tbody>
                        <tfoot>
                            <tr className="total">
                                <td>Total</td>
                                <td id="total"></td>
                            </tr>
                            <tr>
                                
                            </tr>
                        </tfoot>
                    </table>
                    <div className="Buttom2">
                    <Link to="#" className="link" onClick={Eliminar}>
                    
                    <svg  xmlns="http://www.w3.org/2000/svg" className="Buttom icon icon-tabler icon-tabler-printer" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="#084A7F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                                            <rect x="7" y="13" width="10" height="8" rx="2" />
                                    </svg>
          </Link>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Invoice