import React, { useState } from  'react';
import './App.css';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setfirstnameError] = useState("e");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setlastnameError] = useState("e");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("e");
    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState("e");
    const [confirmpassword, setConfirmpassword] = useState("");    
    const [confirmpasswordError, setconfirmpasswordError] = useState("e");
  
    const handleFirstNameError = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setfirstnameError("First Name must be 2 characters or longer!");
        
        } else {
            // an empty string is considered a "falsy" value
            setfirstnameError("");
        }
    }
    const handlelastNameError = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setlastnameError("Last Name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setlastnameError("");
        }
    }
    const handleEmailError = (e) => {

        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setemailError("");
        }
    }

    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
            
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");           
        } else {
            // an empty string is considered a "falsy" value
            setpasswordError("");
        }
    }
    const handleConfirmPasswordError = (e) => {

        setConfirmpassword(e.target.value);
        if(e.target.value.length < 1) {
            setconfirmpasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 8) {
            setconfirmpasswordError("Confirm Password must be 8 characters or longer!");
        }
        else {
            // an empty string is considered a "falsy" value
            setconfirmpasswordError("");
        }
        
    }
    return(
      <div className='App'>
 <form onSubmit={ (e) => e.preventDefault() }>

              <div>
                  <label>First Name: </label> 
                  <input type="text" onChange={ handleFirstNameError }/>
                  {
                    firstnameError && firstnameError !== 'e' ?
                    <p>{ firstnameError }</p> :
                    ''
                }
              </div>
              <div>
                  <label>Last Name: </label> 
                  <input type="text" onChange={ handlelastNameError } />
                  {
                    lastnameError  && lastnameError !== 'e' ?
                    <p>{ lastnameError }</p> :
                    ''
                    }
              </div>
              <div>
                  <label>Email: </label>
                  <input type="text" onChange={ handleEmailError } />
                  {
                    emailError && emailError !== 'e' ?
                    <p>{ emailError }</p> :
                    ''
                }
              </div>
              <div>
                  <label>Password: </label>
                  <input type="password" onChange={ handlePasswordError } />
                  {
                    passwordError && passwordError !== 'e' ?
                    <p>{ passwordError }</p> :
                    ''
                }
              </div>
              <div>
                  <label>Confirm Password: </label>
                  <input type="password" onChange={ handleConfirmPasswordError } />
                  {
                    confirmpasswordError && confirmpasswordError !== 'e' ?
                    <p>{ confirmpasswordError }</p> :
                    confirmpassword !== password ?
                    <p>Password do not match</p>:
                    ''
                }
            
            
              </div>
            
            {  emailError || firstnameError || lastnameError || passwordError || confirmpasswordError || confirmpassword !== password ?
                    <input type="submit" value="Create User" disabled /> :
                    <input type="submit" value="Create Movie" />
            }
            
                 

          </form>
        </div>
    );
};
    
export default UserForm;