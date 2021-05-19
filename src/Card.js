import React from 'react'
import './Card.css'

function Card({image}) {
    return (
        <div className="card">
            <img className="card__image" src={image} alt=""/>
            
        </div>
    )
}

export default Card
