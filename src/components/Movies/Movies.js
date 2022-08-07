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
    isMoviesError,
    searched,
    searchedMovies
}) {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm setSearch={setSearch} search={search} getFilteredMovies={getFilteredMovies} />
            <FilterCheckbox setSearch={setSearch} search={search} searched={searched} />
            <MoviesCardList
                movies={filteredMovies}
                onLikeMovie={onLikeMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
                setFilteredMovies={setFilteredMovies}
                isLoading={isLoading}
                isMoviesError={isMoviesError}
                search={search}
                searched={searched}
                searchedMovies={searchedMovies}
                setSearch={setSearch}
            />
            <Footer />
        </>
    )
}

export default Movies;