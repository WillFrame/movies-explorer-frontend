import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLoggedIn, movies, onSaveMovie, onDeleteMovie }) {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList
                movies={movies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
            />
            <Footer />
        </>
    )
}

export default Movies;