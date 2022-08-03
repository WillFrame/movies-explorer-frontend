import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ title, duration, image, }) {
    const location = useLocation().pathname;
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="movies-card">
            <div className="movies-card__top-container">
                <div className="movies-card__info-container">
                    <h2 className="movies-card__title">{title}</h2>
                    <p className="movies-card__duration">{duration}</p>
                </div>

                { location === '/saved-movies'
                    ? <button className="movies-card__delete-button" />
                    : <button className={`movies-card__add-button ${isLiked ? 'movies-card__add-button_active' : ''}`} />
                }
            </div>
            <img className="movies-card__image" src={image} alt={title} />
        </div>
    )
}

export default MoviesCard;