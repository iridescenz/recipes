import React, { useState, useEffect} from "react";
import axios from "axios"
import Card from './Card'

  function RecipeSearch(){
    const [results, setResults] = useState('');
    const [data, setData] = useState('');
    const [randomData, setRandomData] = useState('');
  
    const getResults =  (e) => {
      e.preventDefault();
      const apiKey = `1a9c47442e0b4afb8a9feb3c51a49e09`
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${results}&apiKey=${apiKey}`)
      .then(res => setData(res.data))
      .catch(er => console.log(er))
      setResults('')
    }

      useEffect(async () => {
      const apiKey = `1a9c47442e0b4afb8a9feb3c51a49e09`
      const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=25&tags=paleo&apiKey=${apiKey}`)
      setRandomData(result.data)
     }, [])
     
console.log(randomData)

  let elem = 
  (randomData && randomData.recipes.map((el) => 
    (<Card key={el.id}
    id={el.id}
    title={el.title}
    image={el.image}
    />))
  || (data && data.results.map((el) => 
  (<Card key={el.id}
  id={el.id}
  title={el.title}
  image={el.image}
  />)))
  )

    return (
        <>
        <form className="form" onSubmit={getResults}>
            <label className="label" htmlFor="query">search for a recipe</label>
            <input className="input" 
                   type="text" 
                   name="query"
                   value={results}
                   onChange={(e) => {setResults(e.target.value)}}
                   placeholder="i.e. Keto pancakes"/>
            <button className="button" type="submit" onClick={() => setRandomData('')}>Search</button>
        </form>
    <div>{elem}</div> 
        </>
    )
}
export default RecipeSearch