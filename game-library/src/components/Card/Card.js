import React from 'react'

import './cards.css'


function Card({title, imageSource, text, url}) {
  return (
      
    <div className="card text-center bg-dark">
        <div className="overflow">
            <img src={imageSource} width="414" height="250" alt="" className="card-img-top"/>
        </div>


        <div className="card-body text-light ">
            <h4 className="card-title">{title}</h4>
            <p className="card-text  text-secondary">
                {
                    text ? text : 'Contenido no encontrado'
                }
            </p>
            <a href={url} className="btn btn-outline-secondary rounded-0">
                Jugar
            </a>
        </div>

    </div>
  )
}

export default Card