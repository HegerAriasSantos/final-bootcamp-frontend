import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/router/App';
import '~/styles/global.scss';
import Intercerptors from './Interceptors';
import { store } from '~/Context';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Intercerptors>
        <App />
      </Intercerptors>
    </Provider>
  </React.StrictMode>,
);
