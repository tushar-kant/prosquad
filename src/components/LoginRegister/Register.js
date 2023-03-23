import './Login.css';
import { useState } from 'react';
import axios from 'axios'


const Register = () => {
  const [ user, setUser ] = useState( {
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  } );

  const handleInputChange = ( event ) => {
    const { name, value } = event.target;
    setUser( { ...user, [ name ]: value } );
  };

  const handleSubmit = async ( event ) => {
    event.preventDefault();
    try {
      const response = await axios.post( "http://localhost:5000/users", user );
      console.log( response.data );
    } catch ( error ) {
      console.error( error );
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={ handleSubmit }>
          <div className="user-box">
            <input type="email" name="email" value={ user.email } onChange={ handleInputChange } required="" />
            <label>EmailID</label>
          </div>
          <div className="user-box">
            <input type="text" name="username" value={ user.username } onChange={ handleInputChange } required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={ user.password } onChange={ handleInputChange } required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="ConfirmPassword" value={ user.ConfirmPassword } onChange={ handleInputChange } required="" />
            <label> Confirm Password</label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register