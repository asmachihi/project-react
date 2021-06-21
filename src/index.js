import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/com.css'
import NavBar from './components/NavBar'
import Formulaire from './components/Formulaire.js'


ReactDOM.render(
  <React.StrictMode>
   <App/>
   <NavBar/><br/><br/>
   <Formulaire/>
  </React.StrictMode>,
  document.getElementById('root')
);