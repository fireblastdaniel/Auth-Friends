import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = props => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then( res => {
                window.localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <label>
                    Username:
                    <input type='text' name='username' onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type='text' name='password' onChange={handleChange} />
                </label>
            </form>
        </div>
    );
}

export default Login;