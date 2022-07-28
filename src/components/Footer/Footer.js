import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__bottom-container">
                <div className="footer__links-container">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/WillFrame" target='_blank' rel='noreferrer'>Github</a>
                    <a className="footer__link" href="http://facebook.com/" target='_blank' rel='noreferrer'>Facebook</a>
                </div>
                <p className="footer__copyright">© 2020</p>
            </div>
        </footer>
    );
};

export default Footer;