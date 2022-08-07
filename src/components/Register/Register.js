import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import Logo from '../../images/logo.svg';

function Register({ onRegister, isError, error, setError }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function errorHandler() {
        for (const key in errors) {
            if (errors[key]) {
                return errors[key]
            };
        }
    };

    useEffect(() => {
        setError('');
    }, [values]);

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values.name, values.email, values.password);
    }

    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={Logo} alt="Логотип" />
            </Link>
            <h1 className="register__greeting">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <label className="register__input-name">Имя</label>
                <input
                    className="register__input"
                    onChange={handleChange}
                    required
                    type="text"
                    minLength="2"
                    maxLength="30"
                    value={values.name || ''}
                    name='name'
                />
                <label className="register__input-name">E-mail</label>
                <input
                    className="register__input"
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email || ''}
                    name='email'
                />
                <label className="register__input-name">Пароль</label>
                <input
                    className={`register__input ${isError ? 'register__input_color_red' : ''}`}
                    onChange={handleChange}
                    required
                    type='password'
                    minLength='8'
                    value={values.password || ''}
                    name='password'
                />
                { Object.values(errors).length > 0 && (<span className="register__span">{errorHandler()}</span>) }
                { error && (<span className={`register__span ${error ? '' : 'register__span_disabled'}`}>{error}</span>) }
                <button className={`register__submit ${(error || !isValid) ? 'register__submit_disabled' : ''}`} type="submit" disabled={!isValid || error}>Зарегистрироваться</button>
            </form>
            <p className="register__text">Уже зарегестрированы?<Link className="register__link" to="/signin">Войти</Link></p>
        </section>
    )
}

export default Register;