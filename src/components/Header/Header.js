import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import profileLogo from "../../images/profile-logo.svg";
import menuLogo from "../../images/menu-logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ theme, isLoggedIn }) {
    const location = useLocation().pathname;
    const [isNavOpen, setIsNavOpen] = useState(false);

    function handleNavOpen() {
        setIsNavOpen(true);
    }

    function handleNavClose() {
        setIsNavOpen(false);
    }

    return (
        <header className={`header ${theme}`}>
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            { isLoggedIn
                ? <>
                    <Link to="/movies" className={`header__link ${location === '/movies' ? 'header__link_active' : ''}`}>Фильмы</Link>
                    <Link to="/saved-movies" className={`header__link ${location === '/saved-movies' ? 'header__link_active' : ''}`}>Сохраненные фильмы</Link>
                    <Link className={`header__profile ${theme}`} to="/profile">Аккаунт <div className="header__profile-container"><img className="header__profile-logo" src={profileLogo} alt="Профиль" /></div></Link>
                    <button className={`header__menu-button ${theme}`} onClick={handleNavOpen}><img className="header__menu-logo" src={menuLogo} alt="Логотип меню" /></button>
                </>
                : <>
                    <Link to="/signup" className="header__signup">Регистрация</Link>
                    <Link to="/signin" className="header__signin">Войти</Link>
                </>
            }
            { isNavOpen
                ? <Navigation handleNavClose={handleNavClose} />
                : <></>
            }
        </header>
    );
}

export default Header;