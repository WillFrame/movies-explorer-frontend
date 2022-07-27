import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Films from '../Films';
import Profile from '../Profile';
import Footer from '../Footer/Footer';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function App() {
    return (
        <Routes>
            <Route path="/signin" element={
                <Login />
            } />
            <Route path="/signup" element={
                <Register />
            } />
            <Route exact path="/" element={
                <Main />
            } />
            <Route path="/movies" element={
                <>
                    <Movies />
                </>
            } />
            <Route path="/saved-movies" element={
                <>
                    <Header theme="header_theme_dark" isLoggedIn={true} />
                    <SearchForm />
                    <FilterCheckbox />
                    <Films cardsLength='12' />
                    <Footer />
                </>
            } />
            <Route path="/profile" element={
                <>
                    <Header theme="header_theme_dark" isLoggedIn={false} />
                    <Profile />
                </>
            } />
            <Route path="*" element={ <Navigate to='/' /> } />
        </Routes>
    );
};

export default App;
