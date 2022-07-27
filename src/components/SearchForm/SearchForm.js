import React from "react";

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__input-container">
                <input className="search-form__input" placeholder="Фильм" type="url" />
                <button className="search-form__submit">Поиск</button>
            </div>
        </section>
    )
}

export default SearchForm;