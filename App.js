import React,{ useEffect, useState } from 'react';
import './App.css';
import Recepie from './Recepie';

const App=() => {
  const app_id="7fea8304"
  const app_key="9b14295be944999e168fd504db66a745"
  const ex=`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`

  const [recepie , setRecipe ] =useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");

  useEffect(()=>{
    getrecepie();
  },[query])

    const getrecepie= async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
      )
      const data = await response.json();
      setRecipe(data.hits);
    }

    const uds=e=>{
      setSearch(e.target.value);
    }

    const getSearch=e=>{
      e.preventDefault();
      setQuery(search);
    }

  return(
   <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input  className="search-bar" type="text" value={search} onChange={uds}/>
        <button className="search-utton" type="submit" > search </button>
          </form> 
          <div className="recipe">
          {recepie.map(recipe =>(
            <Recepie 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.label}
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
            />

          )
          )
          }
          </div>
    </div>
  )
}

export default App;
