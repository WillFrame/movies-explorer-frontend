import React from "react";
import promoImage from '../../images/promo-image.svg';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__image" src={promoImage} alt="Изображение" />
        </section>
    )
}

export default Promo;