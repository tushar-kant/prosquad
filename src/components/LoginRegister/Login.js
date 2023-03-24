import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const navigate = useNavigate();

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        try {
            // Send login request to API
            const res = await axios.post( 'http://localhost:5000/login', { email, password } );

            // Save token to local storage
            localStorage.setItem( 'token', res.data.token );

            // Redirect to home page
            navigate( '/' )
        } catch ( err ) {
            setError( err.response.data.message );
        }
    };

    return (
        <>
            <div class="login-box">
                <h2>Login</h2>
                { error && <div className="error">{ error }</div> }
                <form onSubmit={ handleSubmit }>
                    <div class="user-box">
                        <input type="email" name="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } required />
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name='password' value={ password } onChange={ ( e ) => setPassword( e.target.value ) } required />
                        <label>Password</label>
                    </div>
                    <button type='submit'>Sign in</button>
                </form>
            </div>
        </>
    )
}

export default Login