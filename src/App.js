import React,{useState} from 'react';
import { BrowserRouter as Router , Route,Switch,Link} from 'react-router-dom';
import './components/navbar.css'
import Home from './components/home';
import Burger from './components/burger';
import Pizza from './components/pizza';
import Search from './components/search';

const App = () =>{
  const [query,setQuery]=useState("");
    const Change = e => setQuery(e.target.value);
  return (
    <div className="content"> 
      <Router>
      <div>
            <nav className="nav">
                <Link to="/" className="Link">Home</Link>
                <Link to="/Burger" className="Link">Burger</Link>
                <Link to="Pizza" className="Link">Pizza</Link>
            <form>
                <input onChange={Change} value={query} type="text" placeholder="search your recipe..."></input>
                <Link to="/Search" id="button">Search</Link>
            </form>
            </nav>
        </div>
          <Switch>
          <Route path="/Burger">
           <Burger></Burger>
          </Route>
          <Route path="/Pizza">
              <Pizza></Pizza>
          </Route>
          <Route path="/Search">
            <Search query={query}></Search>
          </Route>
          <Route path="/">
              <Home></Home>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
