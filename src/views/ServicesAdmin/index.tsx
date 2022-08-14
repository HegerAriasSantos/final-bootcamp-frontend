import "./index.scss";
import Swal from "sweetalert2";
import axios from "axios";
import useFilter from "~/hooks/useFilter";
import ClienteWrapper from "~/components/ServicesWrapper";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Service } from "~/types";
import { SERVER_ENDPOINT } from "~/lib/config";

function index() {
  const MySwal = withReactContent(Swal);
  const [services, setServices] = useState<Service[]>();
  const [clientesFilted, setClienteFilted] = useState<Service[]>();

  const handleDelete = (e: any) => {
    MySwal.fire({
      title: "Seguro que quieres borrar este cliente?",
      text: "No podras recuperarlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
        // const id = e.target.id;
        // axios.delete(`https://scrum-proyect.herokuapp.com/cliente/delete/${id}`).then(() => {
        //   setClienteFilted(clientes.filter(video => video.id !== id));
        // });
      }
    });
  };
  useEffect(() => {
    axios(`${SERVER_ENDPOINT}/service`).then(res => {
      console.log(res);
      // const orderedDatas = res.data.body.sort(function (a: { deuda: number; }, b: { deuda: number; }) {
      //   if (a.deuda < b.deuda) {
      //     return 1;
      //   }
      //   if (a.deuda > b.deuda) {
      //     return -1;
      //   }
      //   return 0;
      // });
      // setClientes(orderedDatas);
      // setClienteFilted(orderedDatas);
    });
  }, []);
  return (
    <div className='admin'>
      <div className='admin__header'>
        <h1>Administrar Clientes</h1>
      </div>
      <div className='admin__actions'>
        <Link to='/admin/services/create'>
          <button>Create Cliente</button>
        </Link>
        <input
          type='text'
          id='search'
          placeholder='Buscar...'
          onChange={e => setClienteFilted(useFilter(clientes, e.target.value))}
        />
      </div>
      <div className='admin__videos'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientesFilted.length > 0 ? (
              clientesFilted.map((cliente) => (
                <ClienteWrapper
                  Id={cliente.Id}
                  Name={cliente.Name}
                  Price={cliente.Price}
                  key={cliente.Id}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <span></span>
            )}
          </tbody>
        </table>
        {clientesFilted.length === 0 && (
          <h2>No hay clientes que coincidan con su busqueda</h2>
        )}
      </div>
    </div>
  );
}

export default index;
