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

    useEffect(() => {
        getMovies()
            .then(res => {
                setMovies(res);
            })
            .catch((err) => {
                console.log(err);
            })
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
                handleLogin(name, password);
            })
            .catch((err) => {
                setIsRegisterError(true);
                console.log(err)
            })
    };

    function handleSaveMovie(id) {
        const movie = movies.find((item) => 
            item.id === id
        )
        console.log(movie);
        createMovie(movie);
    }

    function handleDeleteMovie(id) {
        console.log(id);
    }

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
                        movies={movies}
                        onSaveMovie={handleSaveMovie}
                        onDeleteMovie={handleDeleteMovie}
                    />
                } />

                <Route path="/saved-movies" element={
                    <SavedMovies
                        isLoggedIn={isLoggedIn}
                        movies={movies}
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
