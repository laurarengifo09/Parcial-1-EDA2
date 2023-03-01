import React, { useState } from 'react';
import '../Style/Styles.css'

export const Chance=()=> {
    
  const [numero, setNumero] = useState('');
  const [valor, setValor] = useState('');
  const [arreglo, setArreglo] = useState([]);
  const [total, setTotal] = useState(0);

  const handleNumero = event => {
    setNumero(event.target.value);
  };

  const handleValor = event => {
    setValor(event.target.value);
  };


  const handleAñadir = () => {
    if(numero.length >4 || numero.length<3){
        
        alert('El numero debe tener entre 3 y 4 digitos')
    }
    if(valor<100){
        alert('El valor minimo es de $100')
    }

    if (numero == '' && valor == '') { 
        alert('Por favor escriba el numero a jugar y su valor')
 
    }else{
        
      setArreglo([...arreglo, { numero, valor }]);
      setTotal(total + parseFloat(valor));
      setNumero('');
      setValor('');
    }
  };

  return (
    <div className='Chance'>
        <h1 className='titulo'>APUESTAS DE CHANCE</h1>
        <div className='Inputs'>
            <label className='nombre'> Ingrese el numero que desea jugar:
            <input  className='Container' type="number" value={numero} maxLength='4' onChange={handleNumero}/>
            </label>
            <br />
            <label className='nombre'>Ingrese el valor de la apuesta:
            <input type="number" className='Container' value={valor} onChange={handleValor} />
            </label>
            <br />
        </div>
      
      <button className='boton' onClick={handleAñadir}>Añadir Numero</button>
      <br />
      <ul>
        <li></li>
        {arreglo.map((arreglo, key) => (
          <li key={key}>{arreglo.numero}: {arreglo.valor}</li>
        ))}
      </ul>
      <h2>El valor a pagar total seria:</h2>
      
      
      <p>${total}</p>
      
    </div>
  );
}

