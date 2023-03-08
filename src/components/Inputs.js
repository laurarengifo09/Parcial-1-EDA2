import React from 'react'
import { useState } from 'react';

const Inputs = ({arreglo, setArreglo, total, setTotal}) => {

  const [numero, setNumero] = useState('');
  const [valor, setValor] = useState('');

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
    else if(valor<100){
        alert('El valor minimo es de $100')
    }

    else if (numero == '' && valor == '') { 
        alert('Por favor escriba el numero a jugar y su valor')
 
    }else{
        
      setArreglo([...arreglo, { numero, valor }]);
      setTotal(total + parseFloat(valor));
      setNumero('');
      setValor('');
    }
  };



  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-3'>
            <span className='nombre'> Ingrese el numero que desea jugar:
            </span>
            <input  className='ml-3 p-2 bg-slate-200 rounded-sm' type="number" value={numero} maxLength='4' onChange={handleNumero}/>
            <span className='nombre'>Ingrese el valor de la apuesta:
            </span>
            <input type="number" className='ml-3 p-2 bg-slate-200 rounded-sm' value={valor} onChange={handleValor} />
            <button className='bg-blue-800 h-9 px-4 text-white rounded-md font-semibold col-span-2'  onClick={handleAñadir}>Añadir Numero</button>
        </div>
  )
}

export default Inputs