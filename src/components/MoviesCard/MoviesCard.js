import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ title, duration, image, onLikeMovie, onDeleteMovie, id, savedMovies, trailerLink }) {
    const location = useLocation().pathname;
    const [isLiked, setIsLiked] = useState(false);

    function handleLikeButton() {
        isLiked ? onDeleteMovie(id) : onLikeMovie(id);
        setIsLiked(!isLiked);
    }

    function handleDeleteMovie() {
        onDeleteMovie(id);
    }

    useEffect(() => {
        setIsLiked(savedMovies.find((item) => item.movieId === id));
    }, [])

    return (
        <div className="movies-card">
            <div className="movies-card__top-container">
                <div className="movies-card__info-container">
                    <h2 className="movies-card__title">{title}</h2>
                    <p className="movies-card__duration">{`${(duration - (duration % 60))/60}ч ${duration % 60}м`}</p>
                </div>

                { location === '/saved-movies'
                    ? <button className="movies-card__delete-button" type="button" onClick={handleDeleteMovie} />
                    : <button className={`movies-card__add-button ${isLiked ? 'movies-card__add-button_active' : ''}`} type="button" onClick={handleLikeButton} />
                }
            </div>
            <a href={trailerLink} className="movies-card__link" target='_blank' rel="noreferrer">
                <img className="movies-card__image" src={image} alt={title} />
            </a>
        </div>
    )
}

export default MoviesCard;