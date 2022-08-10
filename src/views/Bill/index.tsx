import { useEffect } from "react"
import "./styles.css"

const Bill = () => {
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

    useEffect(() => {
        let data = "";
        let tsum = 0;

        services.forEach(item => {
            data += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
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
                    <h1>Ronny Araujo Marte</h1>
                    <table>
                        <thead>
                            <th>Servicio</th>
                            <th>Precio</th>
                        </thead>
                        <tbody id="t-body">
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td id="total"></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button>Imprimir</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </main>
        </>
    )
}


export default Bill