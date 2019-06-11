import axios from 'axios';
import setAuth from './setAuth';

export const register = newUser => {
    return axios
    .post('https://build-week-web19.herokuapp.com/api/auth/register', {
        first: newUser.first,
        last: newUser.last,
        phone: newUser.phone,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Registration Complete");
    })
}

export const login = user => {
    return axios
    .post('https://build-week-web19.herokuapp.com/api/auth/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        const token = res.data.token;
        localStorage.setItem( 'token', token)
        setAuth(token);
    })
    .catch(err => {
        console.log(err);
    })
}