import React from "react";

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__input-container">
                <input className="search-form__input" placeholder="Фильм" type="url" required />
                <button className="search-form__submit">Поиск</button>
            </div>
        </form>
    )
}

export default SearchForm;