import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Login({ onLogin, isError }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(email, password);
    }

    return (
        <section className="login">
            <img className="login__logo" src={Logo} alt="Логотип" />
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__input-name">E-mail</label>
                <input className="login__input" onChange={handleEmailChange} required />
                <label className="login__input-name">Пароль</label>
                <input className={`login__input ${isError ? 'login__input_color_red' : ''}`} onChange={handlePasswordChange} required />
                <span className={`login__span ${isError ? '' : 'login__span_disabled'}`}>Что-то пошло не так...</span>
                <button className="login__submit" type="submit">Войти</button>
            </form>
            <p className="login__text">Ещё не зарегестрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
        </section>
    )
}

export default Login;