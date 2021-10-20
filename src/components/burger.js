import React,{useState,useEffect} from 'react';
import Recipe from './card';
import './burger.css'
const Burger=()=>{
    const [recipes, setRecipes] = useState([]);
    const APP_KEY = "7f6e55108e844de8a8b1051f4acf808e";
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=${APP_KEY}`;
    useEffect(() => {
        loadData();
      });
    
     const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.results);
      }
    return(
        <div className="burger">
            <section className="welcome">
                <h1>Welcome to Burger section</h1>
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
export default Burger;