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
    const [isRegisterError, setIsRegisterError] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [isProfileError, setIsProfileError] = useState(false);
    const [isProfileEdit, setIsProfileEdit] = useState(false);
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [search, setSearch] = useState({ key: '', short: false});
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
            if ((location.pathname !== '/signin') && (location.pathname !== '/signup')) {
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
            })
            .catch((err) => {
                setIsLoginError(false);
                console.log(err);
            })
    };

    function handleEditProfile() {
        setIsProfileEdit(true);
    };

    function handleUpdateUser(name, email) {
        updateUser(name, email)
            .then(() => {
                setCurrentUser({ name, email });
                setIsProfileEdit(false);
                setIsProfileError(false);
            })
            .catch(() => {
                setIsProfileError(true);
            })
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
            })
            .catch((err) => {
                setIsRegisterError(true);
                console.log(err)
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
        handleGetSavedMovies();
    }

    function handleDeleteMovie(id) {
        const movie = savedMovies.find((item) => item.movieId === id)
        deleteMovie(movie._id)
            .then(() => {
                handleGetSavedMovies();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleGetSavedMovies() {
        getSavedMovies()
            .then(res => {
                setSavedMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getMovies()
            .then(res => {
                setMovies(res);
            })
            .catch((err) => {
                console.log(err);
            })
        if (isLoggedIn) {
            handleGetSavedMovies();
        }
    }, [currentUser]);

    function getFilteredMovies() {
        console.log(movies);
        console.log(search);
        setFilteredMovies(MoviesFilter(movies, search));
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route path="/signin" element={
                    <Login
                        onLogin={handleLogin}
                        isError={isLoginError}
                    />
                } />

                <Route path="/signup" element={
                    <Register
                        onRegister={handleRegister}
                        isError={isRegisterError}
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
                        search={search}
                        getFilteredMovies={getFilteredMovies}
                        setFilteredMovies={setFilteredMovies}
                    />
                } />

                <Route path="/saved-movies" element={
                    <SavedMovies
                        isLoggedIn={isLoggedIn}
                        savedMovies={savedMovies}
                        onDeleteMovie={handleDeleteMovie}
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
