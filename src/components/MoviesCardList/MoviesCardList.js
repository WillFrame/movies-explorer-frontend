import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cardsLength }) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>

            { cardsLength > 12 
                ? <button className="movies-card-list__more-button">Ещё</button>
                : <></>
            }
        </section>
    )
}

export default MoviesCardList;