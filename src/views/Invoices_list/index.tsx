
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import logo from '~/views/Logo.png';

function InvoicesList() {
  return (
    <>
      <div className="container">
        <img src={logo} alt='Logo' style={{ width: '250px'}}/>

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
              <td>Ver detalle</td>
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