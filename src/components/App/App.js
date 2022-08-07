import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { register, authorize, getUser, updateUser, getSavedMovies, createMovie, deleteMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import MoviesFilter from '../../utils/MoviesFilter';
import CurrentUserContext from '../../context/CurrentUserContext';
import './App.css';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isSuccesss, setIsSucces] = useState(false);
    const [isProfileEdit, setIsProfileEdit] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [search, setSearch] = useState({ key: '', short: false });
    const [isLoading, setIsLoading] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    const [moviesError, setMoviesError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            getUser()
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        setCurrentUser({ name: res.data.name, email: res.data.email });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            if ((location.pathname === '/movies') && (location.pathname === '/saved-movies') && (location.pathname === '/profile')) {
                navigate('/');
            }
        }
    }, []);

    function handleLogin(email, password) {
        authorize(email, password)
            .then((res) => {
                localStorage.setItem('jwt', res.token);
                getUser()
                    .then((res) => {
                        setCurrentUser({ name: res.data.name, email: res.data.email });
                        setIsLoggedIn(true);
                        navigate('/movies');
                    });
                setError('');
            })
            .catch((err) => {
                setError('Что-то пошло не так');
                console.log(err);
            })
    };

    function handleEditProfile() {
        setIsProfileEdit(true);
    };

    function handleUpdateUser(name, email) {
        setIsLoading(true);
        updateUser(name, email)
            .then(() => {
                setCurrentUser({ name, email });
                setIsProfileEdit(false);
                setError('');
                setIsSearched(true);
                setIsSucces(true);
            })
            .catch((err) => {
                setError('Что-то пошло не так');
                console.log(err)
            })
            .finally(() => setIsLoading(false))
    };

    function handleSignOut() {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setFilteredMovies([]);
        setSearch({ key: '', short: false });
        setIsSearched(false);
        navigate('/');
    };

    function handleRegister(name, email, password) {
        register(name, email, password)
            .then(() => {
                handleLogin(email, password);
                setError('');
                setIsSearched(true);
            })
            .catch((err) => {
                setError('Что-то пошло не так');
                console.log(err);
            })
    };

    function handleLikeMovie(id) {
        const movie = filteredMovies.find((item) => 
            item.id === id
        )
        createMovie({
            country: movie.country || 'none',
            description: movie.description,
            director: movie.director,
            duration: movie.duration,
            movieId: movie.id,
            image: `https://api.nomoreparties.co` + movie.image.url,
            nameEN: movie.nameEN || 'none',
            nameRU: movie.nameRU,
            trailerLink: movie.trailerLink,
            year: movie.year,
            thumbnail: `https://api.nomoreparties.co` + movie.image.formats.thumbnail.url
        });
        getSavedMovies()
            .then(res => {
                setSavedMovies(res.data);
                setMoviesError('');
                setIsSearched(true);
            })
            .catch(err => {
                console.log(err);
                setMoviesError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            });
    };

    function handleDeleteMovie(id) {
        const movie = savedMovies.find((item) => item.movieId === id);
        deleteMovie(movie._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((item) => item.movieId !== id));
                setMoviesError('');
            })
            .catch((err) => {
                console.log(err);
                setMoviesError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            });
    };

    function getFilteredMovies() {
        setIsLoading(true);
        Promise.all([getSavedMovies(), getMovies()])
            .then(([savedRes, moviesRes]) => {
                setMoviesError('');
                setSavedMovies(savedRes.data);
                setIsSearched(true);
                if (location.pathname === '/movies') {
                    const movies = MoviesFilter(moviesRes, search);
                    setFilteredMovies(movies);
                    localStorage.setItem('movies', JSON.stringify(movies));
                    localStorage.setItem('search', JSON.stringify(search));
                } else {
                    setFilteredMovies(MoviesFilter(savedRes.data, search));
                }
            })
            .catch((err) => {
                console.log(err);
                setMoviesError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route path="/signin" element={
                    <Login
                        onLogin={handleLogin}
                        error={error}
                        setError={setError}
                    />
                } />

                <Route path="/signup" element={
                    <Register
                        onRegister={handleRegister}
                        error={error}
                        setError={setError}
                    />
                } />

                <Route exact path="/" element={
                    <Main isLoggedIn={isLoggedIn} />
                } />

                <Route path="/movies" element={
                    <Movies
                        filteredMovies={filteredMovies}
                        savedMovies={savedMovies}
                        onLikeMovie={handleLikeMovie}
                        onDeleteMovie={handleDeleteMovie}
                        setSearch={setSearch}
                        search={search}
                        getFilteredMovies={getFilteredMovies}
                        setFilteredMovies={setFilteredMovies}
                        isLoading={isLoading}
                        getSavedMovies={getSavedMovies}
                        setSavedMovies={setSavedMovies}
                        moviesError={moviesError}
                        isSearched={isSearched}
                        setIsSearched={setIsSearched}
                    />
                } />

                <Route path="/saved-movies" element={
                    <SavedMovies
                        savedMovies={savedMovies}
                        onDeleteMovie={handleDeleteMovie}
                        setSearch={setSearch}
                        search={search}
                        getFilteredMovies={getFilteredMovies}
                        filteredMovies={filteredMovies}
                        setFilteredMovies={setFilteredMovies}
                        isLoading={isLoading}
                        getSavedMovies={getSavedMovies}
                        isSearched={isSearched}
                        setIsSearched={setIsSearched}
                        moviesError={moviesError}
                    />
                } />

                <Route path="/profile" element={
                    <Profile
                        isEdit={isProfileEdit}
                        setIsProfileEdit={setIsProfileEdit}
                        onUpdateUser={handleUpdateUser}
                        onEdit={handleEditProfile}
                        onSignOut={handleSignOut}
                        isLoading={isLoading}
                        setError={setError}
                        error={error}
                        setIsSucces={setIsSucces}
                        isSuccesss={isSuccesss}
                    />
                } />

                <Route path="*" element={
                    <NotFound />
                } />
            </Routes>
        </CurrentUserContext.Provider>
    );
};

export default App;
