import React from 'react';


export default function Card({
    title,
    ingredients,
    image,
    id,
    instructions
}) {
    return (
        <div className='container-element'>
        <div>{id}</div>
            <p>{title}</p>
             <img src={image} />
             <br />
             <ul>{ingredients}</ul>
             <ol>{instructions}</ol>
            <hr/>
        </div>
    )
}

