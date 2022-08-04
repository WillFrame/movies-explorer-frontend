import React, { useState } from "react";

function SearchForm({ setSearch, search }) {
    const [key, setKey] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setSearch({ ...search, key: key });
        setSearch({ ...search, key: key });
    }

    function handleChangeKey(e) {
        setKey(e.target.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__input-container">
                <input className="search-form__input" placeholder="Фильм" required onChange={handleChangeKey} />
                <button className="search-form__submit" type="submit">Поиск</button>
            </div>
        </form>
    )
}

export default SearchForm;