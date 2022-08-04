import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies = [], onLikeMovie, onDislikeMovie, onDeleteMovie, savedMovies = [] }) {
    const isSavedMovies = useLocation().pathname !== '/movies' ? true : false;
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {isSavedMovies 
                ? savedMovies.map((item) => 
                    <MoviesCard
                        title={item.nameRU}
                        duration={item.duration}
                        onLikeMovie={onLikeMovie}
                        onDislikeMovie={onDislikeMovie}
                        onDeleteMovie={onDeleteMovie}
                        image={item.image}
                        id={item.movieId}
                        key={item.movieId}
                    />
                )
                : movies.map((item) => 
                    <MoviesCard
                        title={item.nameRU}
                        duration={item.duration}
                        onLikeMovie={onLikeMovie}
                        onDislikeMovie={onDislikeMovie}
                        onDeleteMovie={onDeleteMovie}
                        image={'https://api.nomoreparties.co/' + item.image.url}
                        id={item.id}
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