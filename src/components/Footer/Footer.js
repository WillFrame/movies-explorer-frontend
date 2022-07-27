import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__bottom-container">
                <p className="footer__copyright">© 2020</p>
                <div className="footer__links-container">
                    <Link className="footer__link link-styles" to="#">Яндекс.Практикум</Link>
                    <Link className="footer__link link-styles" to="#">Github</Link>
                    <Link className="footer__link link-styles" to="#">Facebook</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;