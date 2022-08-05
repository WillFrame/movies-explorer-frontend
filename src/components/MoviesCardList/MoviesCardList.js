import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies = [], onLikeMovie, onDeleteMovie, savedMovies = [], setFilteredMovies, isLoading, isMoviesError }) {
    useEffect(() => {
        setFilteredMovies([]);
    }, []);

    console.log(isLoading);

    return (
        <section className="movies-card-list">
            {isLoading
                ? <Preloader />
                : isMoviesError
                    ? <p className="movies-card-list__error">Произошла ошибка</p>
                    : <div className="movies-card-list__container">
                        {movies.map((item) =>
                            <MoviesCard
                                title={item.nameRU}
                                duration={item.duration}
                                onLikeMovie={onLikeMovie}
                                onDeleteMovie={onDeleteMovie}
                                image={item.image.url ? ('https://api.nomoreparties.co/' + item.image.url) : item.image}
                                id={item.movieId || item.id}
                                key={item.movieId || item.id}
                                savedMovies={savedMovies}
                            />
                        )}
                    </div>
            }
            { movies.length > 12 
                ? <button className="movies-card-list__more-button">Ещё</button>
                : <div className="movies-card-list__margin-bottom"></div>
            }
        </section>
    )
}

export default MoviesCardList;