import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import navClose from '../../images/nav-close.svg';
import profileLogo from "../../images/profile-logo.svg";

function Navigation({ handleNavClose }) {
    const location = useLocation().pathname;

    return (
        <>
            <div className="navigation__background-opacity"></div>
            <div className="navigation">
                <button className="navigation__close-button"><img className="navigation__close-image" alt="Кнопка закрытия" src={navClose} onClick={handleNavClose} /></button>
                <div className="navigation__links-container">
                    <Link to="/" className={`navigation__link ${location === '/' ? 'navigation__link_active' : ''}`}>Главная</Link>
                    <Link to="/movies" className={`navigation__link ${location === '/movies' ? 'navigation__link_active' : ''}`}>Фильмы</Link>
                    <Link to="/saved-movies" className={`navigation__link ${location === '/saved-movies' ? 'navigation__link_active' : ''}`}>Сохраненные фильмы</Link>
                </div>
                <Link className='navigation__profile' to="/profile">Аккаунт <div className="navigation__profile-container"><img className="navigation__profile-logo" src={profileLogo} alt="Профиль" /></div></Link>
            </div>
        </>
    )
}

export default Navigation;