import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

function SearchForm({ setSearch, search, getFilteredMovies }) {
    const [input, setInput] = useState('');
    const location = useLocation();

    function handleSubmit(e) {
        e.preventDefault();
        getFilteredMovies();
    }

    useEffect(() => {
        if (location.pathname === '/movies') {
            setSearch({ ...search, key : input });
            setInput(JSON.parse(localStorage.getItem('search')).key);
        }
    }, [])

    console.log(input);
    console.log(JSON.parse(localStorage.getItem('search')).short)
    console.log(search);

    function inputChange(e) {
        setInput(e.target.value);
        setSearch({ ...search, key: e.target.value });
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__input-container">
                <input
                    className="search-form__input"
                    placeholder="Фильм"
                    required
                    onChange={inputChange}
                    value={input}
                />
                <button className="search-form__submit" type="submit">Поиск</button>
            </div>
        </form>
    )
}

export default SearchForm;