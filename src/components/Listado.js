import { useState } from "react";

import React from 'react'

export const Listado = ({arreglo}) => {
  return (
    <ul>
        <li></li>
        {arreglo.map((arreglo, key) => (
          <li key={key}>{arreglo.numero}: ${arreglo.valor}</li>
        ))}
      </ul>
  )
}
