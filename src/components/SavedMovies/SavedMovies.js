import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ isLoggedIn, onDeleteMovie, savedMovies }) {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
            <Footer />
        </>
    )
}

export default SavedMovies;