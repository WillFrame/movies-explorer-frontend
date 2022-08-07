import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

function Profile({ isEdit, onUpdateUser, onEdit, onSignOut, isLoading, error, setError, setIsProfileEdit }) {
    const name = useContext(CurrentUserContext).name;
    const email = useContext(CurrentUserContext).email;
    const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values.name, values.email);
    };

    function errorHandler() {
        for (const key in errors) {
            if (errors[key]) {
                return errors[key];
            };
        }
    };

    useEffect(() => {
        setValues({ name, email });
    }, [name, email]);
    
    useEffect(() => {
        setError('');
    }, [values]);

    useEffect(() => {
        setIsProfileEdit(false)
    }, []);

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <section className="profile">
                {isLoading
                    ? <Preloader />
                    : <>
                        <h1 className="profile__greeting">{`Привет, ` + name}</h1>
                        <form className="profile__form" onSubmit={handleSubmit}>
                            <div className="profile__info-container">
                                <p className="profile__info-title">Имя</p>
                                { isEdit
                                    ? <input
                                        className="profile__info-text"
                                        value={values.name || ''}
                                        onChange={handleChange}
                                        maxLength='20'
                                        minLength='2'
                                        required
                                        name="name"
                                        type='text'
                                        placeholder="Имя"
                                    />
                                    : <p className="profile__info-text">{name}</p>
                                }
                            </div>
                            <div className="profile__info-container">
                                <p className="profile__info-title">E-mail</p>
                                { isEdit
                                    ? <input
                                        className="profile__info-text"
                                        value={values.email || ''}
                                        onChange={handleChange}
                                        maxLength='20'
                                        minLength='2'
                                        required
                                        name="email"
                                        type='email'
                                        placeholder="Email"
                                    />
                                    : <p className="profile__info-text">{email}</p>
                                }
                            </div>
                            { isEdit
                                ? <>
                                    { Object.values(errors).length > 0 && (<span className="profile__span">{errorHandler()}</span>) }
                                    { error && (<span className={`profile__span ${error ? '' : 'profile__span_disabled'}`}>{error}</span>) }
                                    <button
                                        className={`profile__save-button ${(error || !isValid || (name === values.name && email === values.email)) ? 'profile__save-button_disabled' : ''}`}
                                        type="submit"
                                        disabled={!isValid || error || (name === values.name && email === values.email)}
                                    >
                                        Сохранить
                                    </button>
                                </>
                                : <>
                                    <button className="profile__edit-button" onClick={onEdit} type="button">Редактировать</button>
                                    <button className="profile__logout-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
                                </>
                            }
                        </form>
                    </>
                }
            </section>
        </>
    )
}

export default Profile;