import { useEffect } from "react"
import "~/views/Bill/StyleChopp.scss"
import logo from '~/views/Logo.png';



import {Link}  from "react-router-dom"

const   Shopp =()=>{
    let ShoppList=[
        {
            "Name":"Elvis Martínez",
            "Service": "Recortada de Barba",
            "Date":Date.parse("11/11/2020"),
            "code": 1,
        },
        {
            "Name":"Sara Ramírez",
            "Service": "Recortada de Barba",
            "Date":Date.parse("11/11/2020"),
            "code": 2,  
        },
        {
            "Name":"Alfonso Perez",
            "Service": "Recortada Completa",
            "Date":Date.parse("11/11/2020"),
            "code": 3,   
        }
    ]
    useEffect(() => {
        let data = "";
        ShoppList.forEach(item => {
            data += `
            <tr>
            <td>${item.code}</td>
            <td>${item.Name}</td>
            <td>${item.Service}</td>
            <td>${item.Date}</td>
            <td>

               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                <rect x="7" y="13" width="10" height="8" rx="2" />
            </svg>
               
               </td>
            </tr>    
            `;
           
        })
        let t_body = document.querySelector("#t-body");
        if (t_body !== null) t_body.innerHTML = data;
    }, [])


    return (
        <> 
        <main className="conain-general">
        <main className="main">
            <div className="shopp-contain">
                         <p className="client">shopping cart</p>
                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#1D79C4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
        </div>
                <div className="container">

                    <table className="Table-shop">
                        <thead className="Thead-shop">
                            <th>Code</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Print</th>
                        </thead>

                        <tbody id="t-body" className="tbody-shop">
                        </tbody>

                        <tfoot>
                        
                        </tfoot>
                    </table>
                </div>

                <div className="botones">
                
                <input type="button" value="Atrás" />

               <input type="button" value="Agregar Cliente" />

           </div>
            </main>
        
        <form action="">
            <div className="container-form">
                <div className="lis-form">
                    <label htmlFor=""><p>Nombre:</p> <input type="text" name="text" id="#" /></label>
                </div>

                <div className="lis-form">
                    <label htmlFor=""><p>Servicio:</p> <input type="text" name="text" id="#" /></label>
                </div>

                <div className="lis-form">
                    <label htmlFor=""><p>Teléfono:</p> <input type="tel" name="text" id="#" /></label>
                </div>

                <div className="lis-form">
                    <label htmlFor=""><p>Fecha:</p> <input type="date" name="text" id="#" /></label>
                </div>
            

            </div>
           
         
            
        </form>
           
            </main>
          
        </>
    )

}

export default Shopp