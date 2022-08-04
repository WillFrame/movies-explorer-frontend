import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLoggedIn, movies, onLikeMovie, onDislikeMovie, onGetAllMovies, setSearch, search, filteredMovies }) {
    // if (isLoggedIn) {
    //     onGetAllMovies();
    // }

    console.log(filteredMovies);

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm setSearch={setSearch} search={search} />
            <FilterCheckbox setSearch={setSearch} search={search} />
            <MoviesCardList
                movies={filteredMovies}
                onLikeMovie={onLikeMovie}
                onDislikeMovie={onDislikeMovie}
            />
            <Footer />
        </>
    )
}

export default Movies;