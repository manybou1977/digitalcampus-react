import React from 'react'
import Chambre from './Chambre'
import Cuisine from './Cuisine'
import Salon from './Salon'

export default function Appart() {
  return (
    <div>
        <h1>Appart</h1>
        <ul>
            <li>
              <Chambre/>

            </li>
            <li>
              <Cuisine/>

            </li>
            <li>
              <Salon/>
              </li>
        </ul>
    </div>
  )
}
