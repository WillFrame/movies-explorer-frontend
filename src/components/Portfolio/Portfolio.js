import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio-title">Портфолио</h3>
            <a className="portfolio-link" href='https://github.com/WillFrame/russian-travel' target='_blank' rel='noreferrer'>
                <h3 className="portfolio-link-text">Статичный сайт</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </a>
            <a className="portfolio-link" href='https://github.com/WillFrame/how-to-learn' target='_blank' rel='noreferrer'>
                <h3 className="portfolio-link-text">Адаптивный сайт</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </a>
            <a className="portfolio-link" href='https://github.com/WillFrame/react-mesto-api-full' target='_blank' rel='noreferrer'>
                <h3 className="portfolio-link-text">Одностраничное приложение</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </a>
        </section>
    )
}

export default Portfolio;