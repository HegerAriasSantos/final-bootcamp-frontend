import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Context';
import { deleteToken, modifyToken } from '~/Context/Reducers/Token';
import logo from '~/logo.svg';

const Hello = () => {
  const token = useSelector((state: RootState) => state.token.value);
  useEffect(() => {
    console.log(token);
  }, [token]);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <img src={logo} alt='Logo' style={{ height: '150px' }} />
      <ul
        style={{
          padding: 0,
          listStyle: 'none',
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <a
          style={{ color: '#F24C4C' }}
          target='_blank'
          href='https://github.com/igdev116/vite-react-ts-eslint-prettier'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
      <p>Token: {token}</p>
      <button
        style={{
          backgroundColor: '#F24C4C',
        }}
        onClick={() => {
          dispatch(deleteToken());
          console.log('Token deleted');
        }}
      >
        Delete token
      </button>
      <button
        onClick={() => {
          dispatch(modifyToken('Hello world'));
          console.log('Token modificado');
        }}
      >
        Modify Token
      </button>
    </div>
  );
};

export default Hello;
