import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import './App.css';

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
                <Movies />
            } />
            <Route path="/saved-movies" element={
                <SavedMovies />
            } />
            <Route path="/profile" element={
                <Profile />
            } />
            <Route path="*" element={
                <NotFound />
            } />
        </Routes>
    );
};

export default App;
