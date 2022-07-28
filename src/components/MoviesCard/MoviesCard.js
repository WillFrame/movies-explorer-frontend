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

                { location === '/movies'
                    ? <input type="checkbox" className="movies-card__add-button" />
                    : <button className="movies-card__delete-button" />
                }
            </div>
            <img className="movies-card__image" src="" alt="Изображение" />
        </div>
    )
}

export default MoviesCard;