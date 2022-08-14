import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./index.scss";
function index({ type }: { type: string }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    direccion: "",
    deuda: "",
    abono: "",
    año: "",
    total: "",
    actores: []
  });
  const typeTitle = type === "create" ? "Crear Cliente" : "Editar Cliente";
  useEffect(() => {
    if (type === "create") return;
    // axios.get(`https://scrum-proyect.herokuapp.com/cliente/${id}`).then(res => {
    //   const {
    //     nombre,
    //     apellido,
    //     cedula,
    //     telefono,
    //     direccion,
    //     deuda,
    //     abono,
    //     total,
    //   } = res.data.body;
    //   setCliente({
    //     nombre,
    //     apellido,
    //     cedula,
    //     telefono,
    //     direccion,
    //     deuda,
    //     abono,
    //     total,
    //   });
    // });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(cliente);
    if (type === "create") {
      axios
        .post(`https://scrum-proyect.herokuapp.com/cliente`, cliente)
        .then(() => {
          navigate("/");
        });
    } else {
      axios
        .patch(`https://scrum-proyect.herokuapp.com/cliente/${id}`, {
          cliente: cliente,
        })
        .then(() => {
          navigate("/");
        });
    }
  };

  const handleChange = (e: any) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeActores = (e: any) => {
    const value = e.target.value.split(",");
    setCliente({
      ...cliente,
      actores: value,
    });
  };

  const handleChangeAño = (e: any) => {
    const reg = new RegExp("^[0-9]+$");
    if (reg.exec(e.target.value) || e.target.value == " ") {
      setCliente({
        ...cliente,
        año: e.target.value,
      });
    }
  };

  return (
    <div className='AdminForm'>
      <h1>{typeTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div className='row1'>
          <div className='nombre'>
            <label htmlFor='nombre'>
              Nombre
              <input
                type='text'
                name='nombre'
                placeholder=' Ej: Juan'
                id='nombre'
                onChange={handleChange}
                value={cliente.nombre}
                required
              />
            </label>
          </div>

          <div className='apellido'>
            <label htmlFor='apellido'>
              Apellido
              <input
                type='text'
                name='apellido'
                id='apellido'
                placeholder='Ej: Pabro Duarte'
                onChange={handleChange}
                value={cliente.apellido}
                required
              />
            </label>
          </div>
          <div className='cedula'>
            <label htmlFor='cedula'>
              Cedula
              <input
                type='text'
                name='cedula'
                id='cedula'
                placeholder='Ej: 222-222222-2'
                onChange={handleChange}
                value={cliente.cedula}
                required
              />
            </label>
          </div>
        </div>
        <div className='row2'>
          <div className='telefono'>
            <label htmlFor='telefono'>
              Telefono
              <input
                type='text'
                name='telefono'
                id='telefono'
                placeholder='Ej: 222-222-2222'
                onChange={handleChange}
                value={cliente.telefono}
                required
              />
            </label>
          </div>

          <div className='direccion'>
            <label htmlFor='direccion'>
              Dirección
              <input
                type='text'
                name='direccion'
                id='direccion'
                placeholder='Ej: av. Principal'
                onChange={handleChange}
                value={cliente.direccion}
                required
              />
            </label>
          </div>
        </div>

        <div className='buttonContainer'>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default index;
