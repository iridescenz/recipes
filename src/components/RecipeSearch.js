import React, { useState} from "react";
import axios from "axios"
import Card from './Card'

 export default function RecipeSearch(){
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');

    const getRecipes =  (e) => {
      e.preventDefault();
      const apiKey = `1a9c47442e0b4afb8a9feb3c51a49e09`
      axios.get(`https://api.spoonacular.com/recipes/random?number=20&tags=keto&apiKey=${apiKey}`)
      .then(res => setData(res.data))
      .catch(er => console.log(er))
      setQuery('')
    }
    console.log(data)
    const elem = data && data.recipes.map((el) => 
      <Card key={el.id}
      id={el.id}
      title={el.title}
      image={el.image}
      /> 
)
  
    return (
        <>
        <form className="form" onSubmit={getRecipes}>
            <label className="label" htmlFor="query">search for a recipe</label>
            <input className="input" 
                   type="text" 
                   name="query"
                   value={query}
                   onChange={(e) => {setQuery(e.target.value)}}
                   placeholder="i.e. Keto pancakes"/>
            <button className="button" type="submit">Search</button>
        </form>
    <div>{elem}</div> 
        </>
    )
}