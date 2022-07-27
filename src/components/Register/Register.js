import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Register() {
    let isError = false;

    return (
        <section className="register">
            <img className="register__logo" src={Logo} alt="Логотип" />
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form">
                <label className="register__input-name">Имя</label>
                <input className="register__input" />
                <label className="register__input-name">E-mail</label>
                <input className="register__input" />
                <label className="register__input-name">Пароль</label>
                <input className={`register__input ${isError ? 'register__input_color_red' : ''}`} />
                <span className={`register__span ${isError ? '' : 'register__span_disabled'}`}>Что-то пошло не так...</span>
            </form>
            <button className="register__submit">Зарегистрироваться</button>
            <p className="register__text">Уже зарегестрированы?<Link className="register__link" to="/signin">Войти</Link></p>
        </section>
    )
}

export default Register;