import React from "react";
import { useLocation } from "react-router-dom";

function Card() {
    const location = useLocation().pathname;

    return (
        <div className="card">
            <div className="card__top-container">
                <div className="card__info-container">
                    <h2 className="card__title">Название фильма</h2>
                    <p className="card__duration">Длительность фильма</p>
                </div>

                { location === '/movies'
                    ? <input type="checkbox" className="card__add-button button-styles" />
                    : <button className="card__delete-button button-styles" />
                }
            </div>
            <img className="card__image" src="" alt="Изображение" />
        </div>
    )
}

export default Card;