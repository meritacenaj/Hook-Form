import React, { useState } from  'react';
import './App.css';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmpassword] = useState("");     
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstname: firstname, 
            lastname: lastname,
            email: email, 
            password: password,
            confirmpassword: confirmpassword
        };
        console.log("Welcome", newUser);
        var {firstname, lastname,email, password, confirmpassword} = props;
    };
    
    return(
      <div className='App'>
          <form onSubmit={createUser}>
              <div>
                  <label>First Name: </label> 
                  <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
              </div>
              <div>
                  <label>Last Name: </label> 
                  <input type="text" onChange={ (e) => setLastname(e.target.value) } />
              </div>
              <div>
                  <label>Email: </label>
                  <input type="text" onChange={ (e) => setEmail(e.target.value) } />
              </div>
              <div>
                  <label>Password: </label>
                  <input type="password" onChange={ (e) => setPassword(e.target.value) } />
              </div>
              <div>
                  <label>Conirm Password: </label>
                  <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } />
              </div>
              {/* <input type="submit" value="Create User" /> */}
          </form>
          <p>Your Form Data </p>
          <p>First Name: {firstname}</p>
          <p>Last Name: {lastname}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Confirm Password: {confirmpassword}</p>
        </div>
    );
};
    
export default UserForm;