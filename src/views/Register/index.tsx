import './index.scss';

function index() {
  return (
    <div id='register'>
      <div className='title'>
        <h2>Crear cuenta</h2>
      </div>

      <main className='main'>
        <form>
          <div>
            <label htmlFor='name'>Nombre: </label>
            <input type='text' id='name' />
          </div>
          <div>
            <label htmlFor='lastname'>Apellido: </label>
            <input type='text' id='lastname' />
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='telefono'>Telefono: </label>
            <input type='number' id='phone' />
          </div>
          <div>
            <label htmlFor='username'>Nombre de usuario: </label>
            <input type='text' id='username' />
          </div>
          <div>
            <label htmlFor='password'>Contraseña: </label>
            <input type='password' id='password' />
          </div>
          <div>
            <button className='button'>Crear cuenta</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default index;
