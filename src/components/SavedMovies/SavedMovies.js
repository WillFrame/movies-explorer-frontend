import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList cardsLength='12' />
            <Footer />
        </>
    )
}

export default SavedMovies;