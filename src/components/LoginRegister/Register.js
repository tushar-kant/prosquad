import React from 'react'
import './Login.css';


const Register = () => {
    return (
        <>
        <div class="login-box">
  <h2>Register</h2>
  <form>
  <div class="user-box">
      <input type="email" name="" required=""/>
      <label>EmailID</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label> confirm Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      SignUP
    </a>
  </form>
</div>
        </>
    )
}

export default Register