import React, { createContext } from 'react'
import Card from './Card.js';
import sekiro from '../../images/sekiro.jpg'
import metro from '../../images/metro.jpg'
import csgo from '../../images/csgo.png'

const cards=[
    {
        id:0,
        title: 'Juego1',
        image: sekiro,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:1,
        title: 'Juego2',
        image: metro,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego4',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },
    {
        id:2,
        title: 'Juego3',
        image: csgo,
        text: 'test',
        url: 'https://youtube.com' 
    },

    
    
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center" >
        <div className="row">
            {
                cards.map((card) => (
                    <div className="col-md-4 px-2 py-3" key={card.id}>
                        <Card title={card.title} imageSource={card.image} text={card.text} url={card.url}/>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Cards