import React from "react";
import Header from "../Header/Header";

function Profile() {
    // хардкод
    let name = 'Виталий';
    let email = 'pochta@yandex.ru'
    let isEdit = true;
    let isError = true;

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <section className="profile">
                <h1 className="profile__greeting">{`Привет, ` + name}</h1>
                <div className="profile__info-container">
                    <p className="profile__info-title">Имя</p>
                    { isEdit 
                        ? <input className="profile__info-text" />
                        : <p className="profile__info-text">{name}</p>
                    }
                </div>
                <div className="profile__info-container">
                    <p className="profile__info-title">E-mail</p>
                    { isEdit 
                        ? <input className="profile__info-text" />
                        : <p className="profile__info-text">{email}</p>
                    }
                </div>
                { isEdit
                ? <>
                    <span className={`profile__span ${isError ? '' : 'profile__span_disabled'}`}>При обновлении профиля произошла ошибка.</span>
                    <button className={`profile__save-button ${isError ? 'profile__save-button_disabled' : ''}`}>Сохранить</button>
                </>
                : <>
                    <button className="profile__edit-button">Редактировать</button>
                    <button className="profile__logout-button">Выйти из аккаунта</button>
                </>
                }
            </section>
        </>
    )
}

export default Profile;