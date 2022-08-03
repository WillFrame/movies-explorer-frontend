import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Header from "../Header/Header";

function Profile({ isLoggedIn, isError, isEdit, onUpdateUser, onEdit, onSignOut }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(name, email);
    };

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <section className="profile">
                <h1 className="profile__greeting">{`Привет, ` + currentUser.name}</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__info-container">
                        <p className="profile__info-title">Имя</p>
                        { isEdit
                            ? <input className="profile__info-text" value={name} onChange={handleNameChange} maxLength='20' minLength='2' required />
                            : <p className="profile__info-text">{currentUser.name}</p>
                        }
                    </div>
                    <div className="profile__info-container">
                        <p className="profile__info-title">E-mail</p>
                        { isEdit
                            ? <input className="profile__info-text" value={email} onChange={handleEmailChange} maxLength='20' minLength='2' required />
                            : <p className="profile__info-text">{currentUser.email}</p>
                        }
                    </div>
                    { isEdit
                        ? <>
                            { isError
                                ? <>
                                    <span className='profile__span'>При обновлении профиля произошла ошибка.</span>
                                    <button className='profile__save-button profile__save-button_disabled' disabled type="submit">Сохранить</button>
                                </>
                                : <>
                                    <span className='profile__span profile__span_disabled'>При обновлении профиля произошла ошибка.</span>
                                    <button className='profile__save-button' type="submit">Сохранить</button>
                                </>
                            }
                        </>
                        : <>
                            <button className="profile__edit-button" onClick={onEdit} type="button">Редактировать</button>
                            <button className="profile__logout-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
                        </>
                    }
                </form>
            </section>
        </>
    )
}

export default Profile;