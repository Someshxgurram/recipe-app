import React from 'react';
import './home.css'
const Home=()=>{
    return(
        <div className="home">
            <section className="welcome">
                <h1>welcome</h1>
            </section>
            <section className="quotes">
                <img src="https://www.keepinspiring.me/wp-content/uploads/2021/06/good-food-is-happiness-auguste-escoffier-quote.png"></img>
                <img src="https://www.keepinspiring.me/wp-content/uploads/2021/06/dont-need-a-silver-fork-paul-prudhomme-quote.png"></img>
                <img src="https://www.keepinspiring.me/wp-content/uploads/2021/06/food-is-a-symbol-allen-wolfelt-quote.png"></img>
            </section>
            <section className="about">
                <h2>Find Your Favourite Recipe</h2>
            </section>
            <section className="para">
                <p>Follow us on</p>
            </section>
            <section className="follow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"></img>
                <img src="https://image.flaticon.com/icons/png/512/124/124010.png"></img>
                <img src="https://image.flaticon.com/icons/png/512/124/124021.png"></img>
            </section>
        </div>
    )
}
export default Home;