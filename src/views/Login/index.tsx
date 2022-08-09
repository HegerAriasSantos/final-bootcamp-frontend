import './index.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import routeLogo from '../../pictures/logo2.png';
import React, { useState } from 'react';
import axios from 'axios';

const index = () => {
  const logoSize = 48;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const uri = 'https://localhost:44336/api/Login/iniciar-sesion';

  const emailData = (event: any) =>{
    setEmail(event.target.value);
  }
  const passData = (event: any) =>{
    setPass(event.target.value);
  }

  const saveData = () =>{
    console.log(`Email: ${email} - Password: ${pass}`);
    let userObj = { "Email": email, "Password": pass };
    axios.post(uri, userObj).then( (resp) => {
      console.log(resp.data);
      localStorage.setItem("token", resp.data.data.token);
      localStorage.setItem("role", resp.data.data.rolPerson);
    });

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='text-start'>
            <img src={routeLogo} alt="aquí un logo" width={logoSize} />
          </div>
          <h2 className='fw-bold text-center py-5'>Login</h2>

          <form method='/'>
            <div className='mb-4'>
              <input type="email" name='email' className='form-control' placeholder='Email:' onChange={emailData}/>
            </div>
            <div className='mb-4'>
              <input type="password" name='pass' className='form-control' placeholder='Contraseña:' onChange={passData}/>
            </div>
            <div className='d-grid'>
              <button type='button' className='btn btn-primary' onClick={saveData}>Guardar</button>
            </div>
          </form>
        </div>
        <div className='col bg'>
        </div>
      </div>
    </div>
  );
}

export default index;
