import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Register({ onRegister, isError }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(name, email, password);
    }

    return (
        <section className="register">
            <img className="register__logo" src={Logo} alt="Логотип" />
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <label className="register__input-name">Имя</label>
                <input className="register__input" onChange={handleNameChange} required />
                <label className="register__input-name">E-mail</label>
                <input className="register__input" onChange={handleEmailChange} required />
                <label className="register__input-name">Пароль</label>
                <input className={`register__input ${isError ? 'register__input_color_red' : ''}`} onChange={handlePasswordChange} required />
                <span className={`register__span ${isError ? '' : 'register__span_disabled'}`}>Что-то пошло не так...</span>
                <button className="register__submit" type="submit">Зарегистрироваться</button>
            </form>
            <p className="register__text">Уже зарегестрированы?<Link className="register__link" to="/signin">Войти</Link></p>
        </section>
    )
}

export default Register;