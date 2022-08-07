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
    moviesError,
    getSavedMovies,
    setSavedMovies,
    isSearched,
    setIsSearched
}) {
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('movies'))) {
            getSavedMovies()
                .then(res => {
                    setSavedMovies(res.data);
                    setFilteredMovies(JSON.parse(localStorage.getItem('movies')));
                    setSearch(JSON.parse(localStorage.getItem('search')));
                });
        } else {
            setFilteredMovies([]);
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
                moviesError={moviesError}
                search={search}
                isSearched={isSearched}
                setIsSearched={setIsSearched}
            />
            <Footer />
        </>
    )
}

export default Movies;