import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard() {
    const location = useLocation().pathname;

    return (
        <div className="movies-card">
            <div className="movies-card__top-container">
                <div className="movies-card__info-container">
                    <h2 className="movies-card__title">Название фильма</h2>
                    <p className="movies-card__duration">Длительность фильма</p>
                </div>

                { location === '/saved-movies'
                    ? <button className="movies-card__delete-button" />
                    : <button className={`movies-card__add-button ${false ? 'movies-card__add-button_active' : ''}`} />
                }
            </div>
            <img className="movies-card__image" src="https://fotointeres.ru/wp-content/uploads/2012/04/0_827f9_58eba125_orig.jpg" alt="Изображение" />
        </div>
    )
}

export default MoviesCard;