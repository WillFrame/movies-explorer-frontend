import React, { useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
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
    getSavedMovies,
    setSavedMovies
}) {
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('movies'))) {
            getSavedMovies()
                .then(res => {
                    setSavedMovies(res.data);
                    setFilteredMovies(JSON.parse(localStorage.getItem('movies')));
                    setSearch(JSON.parse(localStorage.getItem('search')));
                });
        }
    }, []);

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <SearchForm setSearch={setSearch} search={search} getFilteredMovies={getFilteredMovies} />
            <FilterCheckbox setSearch={setSearch} search={search} />
            <MoviesCardList
                movies={filteredMovies}
                savedMovies={savedMovies}
                onLikeMovie={onLikeMovie}
                onDeleteMovie={onDeleteMovie}
                isLoading={isLoading}
                isMoviesError={isMoviesError}
                search={search}
            />
            <Footer />
        </>
    )
}

export default Movies;