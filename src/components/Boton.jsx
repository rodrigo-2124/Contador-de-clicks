import React from "react";
import '../stylesheet/Boton.css';

function Boton({texto, esBotonClick, manejarClick}){  //aplicando desestructuracion
  return (
    <button
      className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick}  //esta es una funcion como prop
    >
      {texto}
    </button>
  );
}

export default Boton;