import React, { Component } from 'react';
//import './App.css';
import './App2.css';
import "react-table/react-table.css";
import Navegacion from './Componentes/Navegacion';
import Tabla2 from './Componentes/Tabla2';
import Tabla3 from './Componentes/Tabla3';
import PropTypes from 'prop-types';
import Tabla from './Componentes/Tabla';


class App extends Component {

  render() {

    return (
      <div>
          <Tabla />
          <hr></hr>
          <Tabla3 />
          <div>
            
          </div>
      </div>

    );
  }

}



export default App;





//Pago-row.js