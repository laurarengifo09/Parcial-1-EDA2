import React, { useState } from 'react';
import Inputs from './components/Inputs';
import { Listado } from './components/Listado';


export const Chance=()=> {
    
  
  const [arreglo, setArreglo] = useState([]);
  const [total, setTotal] = useState(0);

 
  return (
    <div className='flex flex-col gap-5 items-center'>
        <h1 className='text-3xl font-black text-blue-800 mt-10'>APUESTAS DE CHANCE</h1>
        <Inputs total={total} setTotal={setTotal} arreglo={arreglo} setArreglo={setArreglo}></Inputs>
        <Listado arreglo={arreglo}></Listado>
    
      
      
      <h2>El valor a pagar total seria:</h2>
      
      
      <p>${total}</p>
      
    </div>
  );
}

