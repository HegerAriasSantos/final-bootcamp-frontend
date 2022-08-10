import { useEffect } from "react"
import "./Style.scss"
import logo from '~/views/Logo.png';


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


    return (
        <>
            <main className="main">
                <div className="container">
                    <img src={logo} alt='Logo' style={{ width:'250px' }} />
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
                                <td colSpan={3}>
                                <a href=""> 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="Buttom icon icon-tabler icon-tabler-printer" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="#084A7F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                                            <rect x="7" y="13" width="10" height="8" rx="2" />
                                    </svg>
                                </a>
                                
                                    
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </main>
        </>
    )
}


export default Invoice