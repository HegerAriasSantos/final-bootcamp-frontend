
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function InvoicesList() {
  const id = 0;
  return (
    <>
      <div className="container">
        <Table responsive >
          <thead>
            <tr className='table-primary'>
              <th>Nombre de cliente</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Actiones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>400</td>
              <td>12/12/2021</td>
              <td>Ver detalle</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>300</td>
              <td>10/09/2022</td>
              <td><Link to={`/admin/invoice/${id}`}>Ver detalle</Link></td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default InvoicesList;