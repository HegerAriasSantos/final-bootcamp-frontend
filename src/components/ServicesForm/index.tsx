import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./index.scss";
import { Service } from "~/types";
import { SERVER_ENDPOINT } from "~/lib/config";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
function index({ type }: { type: string }) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState<Service>({
    id: "",
    name: "",
    price: "",
  });

  const typeTitle = type === "create" ? "Create Service" : "Edit Service";
  useEffect(() => {
    if (type === "create") return;
    axios.get(`${SERVER_ENDPOINT}/service/${id}`).then(res => {
      console.log(res);
      const {
        id,
        name,
        price,
      } = res.data.data;
      setService({
        id: id,
        name: name,
        price: price,
      });
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(service);
    if (type === "create") {
      axios
        .post(`${SERVER_ENDPOINT}/service`, {
          Name: service.name,
          Price: Number(service.price),
        })
        .then(() => {
          navigate("/admin/services");
        });
    } else {
      axios
        .put(`${SERVER_ENDPOINT}/service/${id}`, {
          Id: id,
          Name: service.name,
          Price: service.price,
        })
        .then(() => {
          navigate("/admin/services");
        });
    }
  };

  const handleChange = (e: any) => {
    if (e.target.name === "price") {
      let price = Number(e.target.value);
      if (price >= 1000) {
        MySwal.fire({
          title: "Error!",
          text: "Can't be mayor than 1000",
          icon: "error",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        })
        setService((prev) => {
          return {
            ...prev,
            price: 999,
          };
        })
        return;
      }
    }
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='AdminForm'>
      <h1>{typeTitle}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="nombre" className="form-control" placeholder="Name" name="name" onChange={handleChange}
          value={service.name}
          required />
        <input type="number" id="price" className="form-control" placeholder="Price" name="price" onChange={handleChange}
          value={service.price}
          required />
        <div className='buttonContainer'>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default index;
