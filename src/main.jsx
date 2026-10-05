import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhTW from 'antd/locale/zh_TW';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store/index.js';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhTW}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
