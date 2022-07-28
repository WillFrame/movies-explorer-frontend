import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__bottom-container">
                <div className="footer__links-container">
                    <Link className="footer__link" to="#">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="#">Github</Link>
                    <Link className="footer__link" to="#">Facebook</Link>
                </div>
                <p className="footer__copyright">© 2020</p>
            </div>
        </footer>
    );
};

export default Footer;