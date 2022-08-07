import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
    movies = [],
    savedMovies = [],
    onLikeMovie,
    onDeleteMovie,
    isLoading,
    isMoviesError,
    search
}) {
    const [count, setCount] = useState(12);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    useEffect(() => {
        currentWidth > 1279
            ? setCount(12)
            : currentWidth > 767 
                ? setCount(8)
                : setCount(5)
    }, [currentWidth, search])

    function addCards() {
        window.innerWidth > 1279
            ? setCount(count + 3)
            : window.innerWidth > 767 
                ? setCount(count + 2)
                : setCount(count + 2)
    }

    useEffect(() => {
        function setWidth() {
            setTimeout(() => setCurrentWidth(window.innerWidth), 2000)
        }
        window.addEventListener('resize', setWidth);
        return () => {
            window.removeEventListener('resize', setWidth);
        }
    }, []);

    return (
        <section className="movies-card-list">
            {isLoading
                ? <Preloader />
                : <>
                    { isMoviesError
                        ? <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
                        : movies.length === 0
                            ? <p className="movies-card-list__error">Ничего не найдено</p>
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
                                        trailerLink={item.trailerLink}
                                    />
                                ).slice(0, count)}
                            </div>
                    }
                    { movies.length > count
                        ? <button className="movies-card-list__more-button" type="button" onClick={addCards}>Ещё</button>
                        : <div className="movies-card-list__margin-bottom"></div>
                    }
                </>
            }
        </section>
    )
}

export default MoviesCardList;