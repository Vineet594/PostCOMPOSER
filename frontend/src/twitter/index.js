import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.scss';
import App from './App';

const apiUrl = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
