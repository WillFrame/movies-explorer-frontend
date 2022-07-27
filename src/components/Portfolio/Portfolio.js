import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio-title">Портфолио</h3>
            <Link className="portfolio-link" to='#'>
                <h3 className="portfolio-link-text">Статичный сайт</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </Link>
            <Link className="portfolio-link" to='#'>
                <h3 className="portfolio-link-text">Адаптивный сайт</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </Link>
            <Link className="portfolio-link" to='#'>
                <h3 className="portfolio-link-text">Одностраничное приложение</h3>
                <h3 className="portfolio-pointer">↗</h3>
            </Link>
        </section>
    )
}

export default Portfolio;