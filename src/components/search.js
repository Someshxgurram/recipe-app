import React,{useState,useEffect} from 'react';
import Recipe from './card';
import './search.css';

function Search(props){
    const [recipes, setRecipes] = useState([]);
    const APP_KEY = "7f6e55108e844de8a8b1051f4acf808e";
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${props.query}&apiKey=${APP_KEY}`;
    useEffect(() => {
        loadData();
      });
    
     const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.results);
      }
    return(
        <div className="search">
            <section className="welcome">
                <h1>Here U Go</h1>
            </section>
            <section>
                <div className="display">
            {
        recipes.map((r) => (
          <Recipe  title={r.title} image={r.image}  />
        ))
      }
      </div>
            </section>
        </div>
    )
}
export default Search;