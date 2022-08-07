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
    const [isProfileError, setIsProfileError] = useState(false);
    const [error, setError] = useState('');
    const [isProfileEdit, setIsProfileEdit] = useState(false);
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [search, setSearch] = useState({ key: '', short: false });
    const [searched, setSearched] = useState({ key: '', short: false });
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMoviesError, setIsMoviesError] = useState(false);
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

    useEffect(() => {
        setSearchedMovies(JSON.parse(localStorage.getItem('movies')));
        setSearched(JSON.parse(localStorage.getItem('search')));
    }, [])

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
                setIsProfileError(false);
            })
            .catch((err) => {
                setIsProfileError(true);
                console.log(err)
            })
            .finally(() => setIsLoading(false))
    };

    function handleSignOut() {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate('/');
    }

    function handleRegister(name, email, password) {
        register(name, email, password)
            .then(() => {
                handleLogin(email, password);
                setError('');
            })
            .catch((err) => {
                setError('Что-то пошло не так');
                console.log(err);
            })
    };

    function handleLikeMovie(id) {
        const movie = movies.find((item) => 
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
                setIsMoviesError(false);
            })
            .catch(err => {
                console.log(err);
                setIsMoviesError(true);
            });
    }

    function handleDeleteMovie(id) {
        const movie = savedMovies.find((item) => item.movieId === id);
        deleteMovie(movie._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((item) => item.movieId !== id));
                setIsMoviesError(false);
            })
            .catch((err) => {
                console.log(err);
                setIsMoviesError(true);
            });
    }

    function getFilteredMovies() {
        setIsLoading(true);
        Promise.all([getSavedMovies(), getMovies()])
            .then(([savedRes, moviesRes]) => {
                setIsMoviesError(false);
                setSavedMovies(savedRes.data);
                setMovies(moviesRes);
            })
            .then(() => {
                
            })
            .then(() => {
            })
            .catch((err) => {
                console.log(err);
                setIsMoviesError(true);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if (movies && savedMovies && location.pathname === '/movies') {
            setFilteredMovies(MoviesFilter(movies, search));
        } else {
            setFilteredMovies(MoviesFilter(savedMovies, search));
        }
    }, [movies, savedMovies]);

    useEffect(() => {
        if (location.pathname === '/movies' && filteredMovies.length !== 0) {
            localStorage.setItem('movies', JSON.stringify(filteredMovies));
            localStorage.setItem('search', JSON.stringify(search));
            setSearchedMovies(filteredMovies);
            setSearched(search);
            console.log(JSON.parse(localStorage.getItem('search')), JSON.parse(localStorage.getItem('movies')));
            console.log(searched, searchedMovies);
        }
    }, [filteredMovies]);

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
                        isLoggedIn={isLoggedIn}
                        filteredMovies={filteredMovies}
                        savedMovies={savedMovies}
                        onLikeMovie={handleLikeMovie}
                        onDeleteMovie={handleDeleteMovie}
                        setSearch={setSearch}
                        search={searched}
                        getFilteredMovies={getFilteredMovies}
                        setFilteredMovies={setFilteredMovies}
                        isLoading={isLoading}
                        isMoviesError={isMoviesError}
                        searched={searched}
                        searchedMovies={searchedMovies}
                    />
                } />

                <Route path="/saved-movies" element={
                    <SavedMovies
                        isLoggedIn={isLoggedIn}
                        savedMovies={savedMovies}
                        onDeleteMovie={handleDeleteMovie}
                        setSearch={setSearch}
                        search={search}
                        getFilteredMovies={getFilteredMovies}
                        filteredMovies={filteredMovies}
                        setFilteredMovies={setFilteredMovies}
                        isLoading={isLoading}
                        isMoviesError={isMoviesError}
                    />
                } />

                <Route path="/profile" element={
                    <Profile
                        isLoggedIn={isLoggedIn}
                        isEdit={isProfileEdit}
                        isError={isProfileError}
                        onUpdateUser={handleUpdateUser}
                        onEdit={handleEditProfile}
                        onSignOut={handleSignOut}
                        isLoading={isLoading}
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
