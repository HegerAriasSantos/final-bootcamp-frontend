import { useState } from 'react';
import { SERVER_ENDPOINT } from '~/lib/config';
import routeLogo from '~/assets/img/logo2.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modifyUser } from '~/Context/Reducers/User';
import { User } from '~/types';

const Login = () => {
  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });
  const navigate = useNavigate();
  const logoSize = 48;
  const dispatch = useDispatch();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const uri = SERVER_ENDPOINT + '/Login/iniciar-sesion';
    const { Email, Password } = form;
    const userObj = { Email, Password };
    axios
      .post(uri, userObj)
      .then((resp) => {
        console.log(resp.data);
        const user: User = {
          id: resp.data.data.PersonId,
          token: resp.data.data.token,
          role: resp.data.data.rolPerson,
          name: resp.data.data.personName,
        }
        dispatch(modifyUser(user));
        navigate('/');
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: "Credentials don't match",
          icon: 'error',
        }).then(() => {
          setForm({
            Email: '',
            Password: '',
          });
        });
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='text-start'>
            <Link to='/'>
              <img src={routeLogo} alt='aquí un logo' width={logoSize} />
            </Link>
          </div>
          <h2 className='fw-bold text-center py-5'>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='email'
                name='Email'
                className='form-control'
                placeholder='Email:'
                onChange={handleChange}
                value={form.Email}
              />
            </div>
            <div className='mb-4'>
              <input
                type='password'
                name='Password'
                className='form-control'
                placeholder='Contraseña:'
                onChange={handleChange}
                value={form.Password}
              />
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn btn-primary'>
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div className='col bg'></div>
      </div>
    </div>
  );
};

export default Login;
