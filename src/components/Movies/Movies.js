import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList cardsLength='13' />
            <Footer />
        </>
    )
}

export default Movies;