import React from "react";

function AboutProject() {
    return (
        <section className="about-project">
            <h3 className="about-project__title">О проекте</h3>
            <div className="about-project__text-container">
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__info-container">
                <div className="about-project__info-weeks-container_backend"><h4 className="about-project__info-weeks_backend">1 неделя</h4></div>
                <div className="about-project__info-weeks-container_frontend"><h4 className="about-project__info-weeks_frontend">4 недели</h4></div>
                <h4 className="about-project__info-title">back-end</h4>
                <h4 className="about-project__info-title">front-end</h4>
            </div>
        </section>
    )
}

export default AboutProject;