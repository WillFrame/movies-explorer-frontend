import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import profileLogo from "../../images/profile-logo.svg"
import menuLogo from "../../images/menu-logo.svg"

function Header({ theme, isLoggedIn }) {
    const location = useLocation().pathname;

    return (
        <header className={`header ${theme}`}>
            <img className="header__logo" src={logo} alt="Логотип" />
            { isLoggedIn
                ? <>
                    <Link to="/movies" className={`header__link ${location === '/movies' ? 'header__link_active' : ''}`}>Фильмы</Link>
                    <Link to="/saved-movies" className={`header__link ${location === '/saved-movies' ? 'header__link_active' : ''}`}>Сохраненные фильмы</Link>
                    <Link className={`header__profile ${theme}`} to="/profile">Аккаунт <div className="header__profile-container"><img className="header__profile-logo" src={profileLogo} alt="Профиль" /></div></Link>
                    <button className="header__menu-button"><img className="header__menu-logo" src={menuLogo} alt="Логотип меню" /></button>
                </>
                : <>
                    <Link to="/signup" className="header__signup">Регистрация</Link>
                    <Link to="/signin" className="header__signin">Войти</Link>
                </>
            }
        </header>
    );
}

export default Header;