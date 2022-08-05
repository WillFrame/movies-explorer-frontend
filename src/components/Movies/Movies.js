import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
    isLoggedIn,
    onLikeMovie,
    onDeleteMovie,
    setSearch,
    search,
    filteredMovies,
    savedMovies,
    getFilteredMovies,
    setFilteredMovies,
    isLoading,
    isMoviesError
}) {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm setSearch={setSearch} search={search} getFilteredMovies={getFilteredMovies} />
            <FilterCheckbox setSearch={setSearch} search={search} />
            <MoviesCardList
                movies={filteredMovies}
                onLikeMovie={onLikeMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
                setFilteredMovies={setFilteredMovies}
                isLoading={isLoading}
                isMoviesError={isMoviesError}
            />
            <Footer />
        </>
    )
}

export default Movies;