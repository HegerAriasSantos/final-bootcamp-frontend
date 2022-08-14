import { useState } from 'react';
import Select from 'react-select';
import './index.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ROLE_USER, SERVER_ENDPOINT } from '~/lib/config';

const Register = ({ type }: { type: string }) => {
  const [form, setForm] = useState({
    Name: '',
    LastName: '',
    Email: '',
    Phone: '',
    Username: '',
    Password: '',
    RoleId: type === "user" ? ROLE_USER : 0,
  });

  const options = [
    { value: 1, label: 'Peluquero' },
    { value: 2, label: 'Cliente' },
  ];
  const [buttonState, setButtonState] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    validateForm();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleChangeRole = (e: any) => {
    setForm({ ...form, RoleId: e.value });
  };

  const validateForm = () => {
    if (
      form.Name != '' &&
      form.LastName != '' &&
      form.Email != '' &&
      form.Phone != '' &&
      form.Username != '' &&
      form.RoleId != 0 &&
      form.Password != ''
    ) {
      setButtonState(true);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const uri = SERVER_ENDPOINT + '/RegisterPerson/new-user';

    axios
      .post(uri, form)
      .then((resp) => {
        Swal.fire('Exito', 'Persona agregada con exito', 'success');
        console.log(resp);
      })
      .catch(() => {
        Swal.fire('Error', 'That thing is still around?', 'error');
      });
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h2>Agregar Nueva Persona</h2>
        </div>
        <div className='col-md-8'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Nombre: </label>
              <input
                className='form-control'
                type='text'
                id='name'
                onChange={handleChange}
                value={form.Name}
                name='Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastname'>Apellido: </label>
              <input
                className='form-control'
                type='text'
                id='lastname'
                onChange={handleChange}
                value={form.LastName}
                name='LastName'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email: </label>
              <input
                className='form-control'
                type='email'
                id='email'
                onChange={handleChange}
                value={form.Email}
                name='Email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='telefono'>Telefono: </label>
              <input
                className='form-control'
                type='text'
                id='phone'
                onChange={handleChange}
                value={form.Phone}
                name='Phone'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='username'>Nombre de usuario: </label>
              <input
                className='form-control'
                type='text'
                id='username'
                onChange={handleChange}
                value={form.Username}
                name='Username'
              />
            </div>
            <div className={type === "user" ? 'form-group mt-2 hidden' : "form-group mt-2"} >
              <label htmlFor='rolId'>Rol de la Persona</label>
              <Select options={options} id='rolId' onChange={handleChangeRole} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Contraseña: </label>
              <input
                className='form-control'
                type='password'
                id='password'
                onChange={handleChange}
                value={form.Password}
                name='Password'
              />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary mt-2 btn-block'
                disabled={!buttonState}
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
