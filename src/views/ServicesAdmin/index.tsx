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
  const [services, setServices] = useState<Service[]>([]);
  const [servicesFilter, setServicesFilted] = useState<Service[]>([]);

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
        const id = e.target.id;
        axios.delete(`${SERVER_ENDPOINT}/service/${id}`).then((res) => {
          console.log(res);
          setServicesFilted(services.filter(service => service.id !== res.data.data.
            id));
        });
      }
    });
  };
  useEffect(() => {
    axios(`${SERVER_ENDPOINT}/service`).then(res => {
      console.log(res);
      setServices(res.data.data);
      setServicesFilted(res.data.data);
    });
  }, []);
  return (
    <div className='admin'>
      <div className='admin__header'>
        <h1>Administrar Services</h1>
      </div>
      <div className='admin__actions'>
        <Link to='/admin/services/create'>
          <button>Create Service</button>
        </Link>
        <input
          type='text'
          id='search'
          placeholder='Buscar...'
          onChange={e => setServicesFilted(useFilter(services, e.target.value))}
        />
      </div>
      <div className='admin__videos'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {servicesFilter.length > 0 ? (
              servicesFilter.map((cliente) => (
                <ClienteWrapper
                  id={cliente.id}
                  name={cliente.name}
                  price={cliente.price}
                  key={cliente.id}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <span></span>
            )}
          </tbody>
        </table>
        {servicesFilter.length === 0 && (
          <h2>No hay clientes que coincidan con su busqueda</h2>
        )}
      </div>
    </div>
  );
}

export default index;
