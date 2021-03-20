import React from 'react';


export default function Card({
    title,
    ingredients,
    image,
    id,
    instructions,
}) {
    const handleClick = () => {
        console.log(id)
        }
    return (
        <div className='container-element'>
        <div>{id}</div>
            <p onClick={handleClick}>{title}</p>
             <img src={image} onClick={handleClick}/>
             <br />
             <ul>{ingredients}</ul>
             <ol>{instructions}</ol>
            <hr/>
        </div>
    )
}

