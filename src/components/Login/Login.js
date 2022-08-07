import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import Logo from '../../images/logo.svg';

function Login({ onLogin, error, setError }) {
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
        onLogin(values.email, values.password);
    }

    return (
        <section className="login">
            <Link to="/">
                <img className="login__logo" src={Logo} alt="Логотип" />
            </Link>
            <h1 className="login__greeting">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__input-name">E-mail</label>
                <input
                    className="login__input"
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email || ''}
                    name='email'
                    pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                />
                <label className="login__input-name">Пароль</label>
                <input
                    className={`login__input ${error ? 'login__input_color_red' : ''}`}
                    onChange={handleChange}
                    required
                    type='password'
                    minLength='8'
                    value={values.password || ''}
                    name='password'
                />
                { Object.values(errors).length > 0 && (<span className="login__span">{errorHandler()}</span>) }
                { error && (<span className={`login__span ${error ? '' : 'login__span_disabled'}`}>{error}</span>) }
                <button className={`login__submit ${(error || !isValid) ? 'login__submit_disabled' : ''}`} type="submit" disabled={!isValid || error}>Войти</button>
            </form>
            <p className="login__text">Ещё не зарегестрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
        </section>
    )
}

export default Login;