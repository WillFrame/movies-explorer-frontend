import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Films from "../Films";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Movies() {
    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={true} />
            <SearchForm />
            <FilterCheckbox />
            <Films cardsLength='13' />
            <Footer />
        </>
    )
}

export default Movies;