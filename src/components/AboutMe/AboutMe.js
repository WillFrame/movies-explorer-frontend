import React from "react";
import { Link } from "react-router-dom";
import aboutMePhoto from '../../images/aboutme-photo.svg';

function AboutMe() {
/* Пока заполнил поля стандартными данными, потом исправлю на свои */
    return (
        <section className="about-me">
            <h3 className="about-me__title">Студент</h3>
            <div className="about-me__info-container">
                <div className="about-me__text-container">
                    <h2 className="about-me__name">Виталий</h2>
                    <h4 className="about-me__subname">Фронтенд-разработчик, 30 лет</h4>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="about-me__social-networks-container">
                        <Link className="about-me__social-network" to="#">Github</Link>
                        <Link className="about-me__social-network" to="#">Facebook</Link>
                    </div>
                </div>
                <img className="about-me__photo" alt="Фото студента" src={aboutMePhoto} />
            </div>
        </section>
    )
}

export default AboutMe;