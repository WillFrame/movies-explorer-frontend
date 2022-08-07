import React, { useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
    onDeleteMovie,
    savedMovies,
    setSearch,
    search,
    getFilteredMovies,
    filteredMovies,
    setFilteredMovies,
    isLoading,
    isMoviesError,
    getSavedMovies
}) {
    useEffect(() => {
        getSavedMovies()
            .then(res => {
                setFilteredMovies(res.data);
                console.log(res.data)
            });
    }, [])

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <SearchForm setSearch={setSearch} search={search} getFilteredMovies={getFilteredMovies} />
            <FilterCheckbox setSearch={setSearch} search={search} />
            <MoviesCardList
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
                movies={filteredMovies}
                setFilteredMovies={setFilteredMovies}
                isLoading={isLoading}
                isMoviesError={isMoviesError}
                search={search}
            />
            <Footer />
        </>
    )
}

export default SavedMovies;