import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Login() {
    let isError = false;

    return (
        <section className="login">
            <img className="login__logo" src={Logo} alt="Логотип" />
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form">
                <label className="login__input-name">E-mail</label>
                <input className="login__input" />
                <label className="login__input-name">Пароль</label>
                <input className={`login__input ${isError ? 'login__input_color_red' : ''}`} />
                <span className={`login__span ${isError ? '' : 'login__span_disabled'}`}>Что-то пошло не так...</span>
            </form>
            <button className="login__submit">Войти</button>
            <p className="login__text">Ещё не зарегестрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
        </section>
    )
}

export default Login;