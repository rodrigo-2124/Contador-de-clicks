import './App.css';
import guitarLogo from './img/guitar.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks]= useState(0);  //se asigna el valor retornado por el Hook useState, numClicks empieza en 0

  const manejarClick = ()=>{
    setNumClicks(numClicks+1);
  }

  const reiniciarContador= ()=>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={guitarLogo}
          alt='logo'
        />
      </div>
      <div className='main-container'>
        <Contador numClicks={numClicks} />

        <Boton
          texto="Click"
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
