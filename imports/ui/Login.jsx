import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from "meteor/accounts-base";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState('')

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  const addUser = ()=>{
    Accounts.createUser({
        username: username,
        password: password,
      });
      {alert("Succesfully creatd Account! You can now Log In")}

  }
  

  return (<div className="forms">
      <form onSubmit={submit} className="login-form">
          <p>Already a member? Log In here!</p>
  <label htmlFor="username">Username</label>

  <input
    type="text"
    placeholder="Username"
    name="username"
    required
    onChange={e => setUsername(e.target.value)}
  />

  <label htmlFor="password">Password</label>

  <input
    type="password"
    placeholder="Password"
    name="password"
    required
    onChange={e => setPassword(e.target.value)}
  />

  <button type="submit" >Log In</button>
</form>
<form  className="signup-form">
    <p>First time? Sign Up Fast!</p>
  <label htmlFor="username">Username</label>

  <input
    type="text"
    placeholder="Username"
    name="username"
    required
    onChange={e => setUsername(e.target.value)}
  />

  <label htmlFor="password">Password</label>

  <input
    type="password"
    placeholder="Password"
    name="password"
    required
    onChange={e => setPassword(e.target.value)}
  />

  <button onClick={addUser}>Sign Up</button>
  
</form>
</div>
    
  );
};