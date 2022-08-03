const BASE_URL = "http://localhost:3001";

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(res => checkResponse(res))
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => checkResponse(res))
}

export const getUser = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(res => checkResponse(res))
}

export const updateUser = (token, name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => checkResponse(res))
}