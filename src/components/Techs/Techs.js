import React from "react";

function Techs() {
    return (
        <section className="techs">
            <h3 className="techs__title">Технологии</h3>
            <h2 className="techs__subtitle">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__items-container">
                <div className="techs__item-container"><h4 className="techs__item-name">HTML</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">CSS</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">JS</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">React</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">Git</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">Express.js</h4></div>
                <div className="techs__item-container"><h4 className="techs__item-name">mongoDB</h4></div>
            </div>
        </section>
    )
}

export default Techs;