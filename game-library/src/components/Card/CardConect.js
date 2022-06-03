import React, { createContext } from 'react'
import Conexion from './Conexion.js';
import steam from '../../images/steam.jpg'
import epic from '../../images/epic.jpg'
import origin from '../../images/origin.png'

const cards=[
    {
        id:0,
        title: 'Steam',
        image: steam,
        url: 'https://store.steampowered.com/login/' 
    },
    {
        id:1,
        title: 'Epic Games',
        image: epic,
        url: 'https://www.epicgames.com/id/login' 
    },
    {

        id:0,
        title: 'Origin',
        image: origin,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
    },

]

function CardConect() {
    return (
      <div className="container d-flex justify-content-center align-items-center" >
          <div className="row">
              {
                  cards.map((card) => (
                      <div className="col-md-4 px-2 py-3" key={card.id}>
                          <Conexion title={card.title} imageSource={card.image} text={card.text} url={card.url}/>
                      </div>
                  ))
              }
          </div>
          
      </div>
    )
  }
  
  export default CardConect;