import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store.js';

//BASEURL: 
// axios.defaults.baseURL = 'http://localhost:3015';
axios.defaults.baseURL = 'https://back-haciendola.onrender.com';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
)
