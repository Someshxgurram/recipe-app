import React from 'react';
import './card.css'
const Recipe = ({title, image}) => {
    return(
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <button>See More...</button>
        </div>
    )
}

export default Recipe;