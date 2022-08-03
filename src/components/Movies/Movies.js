import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLoggedIn }) {
    const movies = [
        { title: 'movie1', duration: '1:48', image: 'https://www.truecolorwallpapers.com/wp-content/uploads/2018/09/TCW-WAF-009-shutterstock_22743616.jpg' },
        { title: 'movie2', duration: '1:32', image: 'https://i.pinimg.com/originals/f9/28/6e/f9286effcff833ed7490cadf26a6b589.jpg' },
        { title: 'movie3', duration: '2:01', image: 'https://puzzleit.ru/files/puzzles/34/34149/_original.jpg' },
        { title: 'movie4', duration: '1:40', image: 'https://cdn.fishki.net/upload/post/201404/14/1260695/1_lfsxuww.jpg' },
        { title: 'movie5', duration: '1:39', image: 'https://puzzleit.ru/files/puzzles/131/131368/_original.jpg' },
        { title: 'movie6', duration: '1:47', image: 'https://million-wallpapers.ru/wallpapers/6/52/541208480272829/biryuzovoe-ozero-sredi-xolodnyx-gor.jpg' },
        { title: 'movie7', duration: '2:10', image: 'https://wallpapermoon.com/wp-content/uploads/2021/07/01010030.jpg' },
        { title: 'movie8', duration: '1:18', image: 'https://i.pinimg.com/originals/91/76/e5/9176e5a8d480de6bdcff5a98e2a7bc67.jpg' },
        { title: 'movie9', duration: '1:45', image: 'https://i.stack.imgur.com/NrTyD.jpg' },
        { title: 'movie10', duration: '2:14', image: 'https://images2.alphacoders.com/562/562933.jpg' },
        { title: 'movie11', duration: '1:44', image: 'https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg' },
        { title: 'movie12', duration: '2:34', image: 'https://mobimg.b-cdn.net/v3/fetch/49/499c9a8cca4ef0a7b944115eead25167.jpeg' },
        { title: 'movie13', duration: '1:41', image: 'https://mobimg.b-cdn.net/v3/fetch/bf/bfb9c126b80950c1a62449a49821673c.jpeg' }
    ]

    return (
        <>
            <Header theme="header_theme_dark" isLoggedIn={isLoggedIn} />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList elements={movies} />
            <Footer />
        </>
    )
}

export default Movies;