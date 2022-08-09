import { useState } from 'react';
import Select from 'react-select'
import './index.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function index() {

  const uri = 'https://localhost:44336/api/RegisterPerson/new-user';
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [rolId, setRolId] = useState(0);
  const options = [
    { value: 1, label: 'Peluquero' },
    { value: 2, label: 'Cliente' }
  ];  
  const [pass, setPass] = useState('');
  const [buttonState, setButtonState] = useState(false);

  const nameChange = (event: any) => {
    //...
    validateForm();
    setName(event.target.value);
  }
  const lastnameChange = (event: any) => {
    //...
    validateForm();
    setLastname(event.target.value);
  }
  const emailChange = (event: any) => {
    //...
    validateForm();
    setEmail(event.target.value);
  }
  const phoneChange = (event: any) => {
    //...
    validateForm();
    setPhone(event.target.value);
  }
  const usernameChange = (event: any) => {
    //...
    validateForm();
    setUsername(event.target.value);
  }
  const rolIdChange = (event: any) => {
    //...
    validateForm();
    setRolId(event.value);
  }
  const passChange = (event: any) => {
    //...
    validateForm();
    setPass(event.target.value);
    validateForm();
  }

  const validateForm = () => {
    //...
    if(name != '' && lastname != '' && email != '' && phone != '' && username != '' && rolId != 0 && pass != ''){
      console.log('datos validos');
      setButtonState(true);
    }
  }

  const addPerson = () => {
    const personObj = {
      "Name": name,
      "LastName": lastname,
      "Email": email,
      "Phone": phone,
      "Username": username,
      "Password": pass,
      "RoleId": rolId
    }
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }

    const messageResponse = (value: boolean) => {
      if(value){
        Swal.fire(
          'Exito',
          'Persona agregada con exito',
          'success'
        )
      }else{
        Swal.fire(
          'Error',
          'That thing is still around?',
          'error'
        );
      }
    }

    axios.post(uri, personObj, config)
    .then( (resp) => {
      console.log(resp.data.response);
      messageResponse(resp.data.response);
    });


    console.log(personObj);
  }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h2>Agregar Nueva Persona</h2>
        </div>
        <div className='col-md-8'>
          <form method='/'>
            <div className='form-group'>
              <label htmlFor='name'>Nombre: </label>
              <input className='form-control' type='text' id='name' onChange={nameChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='lastname'>Apellido: </label>
              <input className='form-control' type='text' id='lastname' onChange={lastnameChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email: </label>
              <input className='form-control' type='email' id='email' onChange={emailChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='telefono'>Telefono: </label>
              <input className='form-control' type='text' id='phone' onChange={phoneChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='username'>Nombre de usuario: </label>
              <input className='form-control' type='text' id='username' onChange={usernameChange}/>
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="rolId">Rol de la Persona</label>
              <Select options={options} id="rolId" onChange={rolIdChange}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Contraseña: </label>
              <input className='form-control' type='password' id='password' onChange={passChange}/>
            </div>
            <div className='form-group'>
              <button type='button' className='btn btn-primary mt-2 btn-block' disabled={!buttonState} onClick={addPerson}>Crear cuenta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
