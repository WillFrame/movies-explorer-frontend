import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies = [] }) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                { movies.map((item) => 
                    <MoviesCard
                        title={item.nameRU}
                        duration={item.duration}
                        image={'https://api.nomoreparties.co/' + item.image.url}
                        key={item.id}
                    />
                )}
            </div>

            { movies.length > 12 
                ? <button className="movies-card-list__more-button">Ещё</button>
                : <div className="movies-card-list__margin-bottom"></div>
            }
        </section>
    )
}

export default MoviesCardList;