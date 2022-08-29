import React from 'react'
import './myStyles.css'

export default function LoginForm() {
  return (
    <div className="loginform">
        <h3>Login In</h3>
        <label for="username">Username: </label>
        <input type="text" placeholder="username: " id="username"/>
        <br></br>
        <label for="password">Password: </label>
        <input type="text" placeholder="password: " id="password"/>
        <button>Submit</button>
    </div>
  )
}
