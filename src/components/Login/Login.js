import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, unstable_HistoryRouter, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Login.css'



const Login = () => {

        const [loginData, setLoginData] = useState({});
        const {loginUser , signInUsingGoogle } = useAuth();
      
        const location = useLocation();
       
      
      
      
        const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
       
        }
        const handleGoogleSignin = () => {
      
      
          signInUsingGoogle()
          .then(result => {
           
          })
        }
        const handleLoginSubmit = e => {
           loginUser(loginData.email , loginData.password , location)
            e.preventDefault();
        }
          return (
              <div>
               <div style={{marginTop:'80px'}}>
                  <div className="wrapper fadeInDown">
        <div id="formContent">
          
      
      
          <div className="fadeIn first">
       
          </div>
      
        
          <form type='submit'  onSubmit={handleLoginSubmit}>
            <input name="email" type="text" id="login" className="fadeIn second" placeholder="email"  onChange={handleOnChange}/>
            <input name="password" type="password" className="fadeIn third"  placeholder="password"  onChange={handleOnChange}/>
            <input  type="submit" className="fadeIn fourth" id='bt' value="Log In"/>
           
          </form>
          
          {/* <p style={{color:'red'}}>error</p> */}
      
          <div className='mb-2'>
            <Button onClick={handleGoogleSignin} className=' fadeIn fourth' id='bt'  >Google</Button>
            </div>
            <div id="formFooter">
                <Link to="/reset">Forgot Password</Link>
              </div>
      
          <div id="formFooter">
            <Link style={{textDecoration:'none' , color:'black'}} className="underlineHover" to="/register">Don't Have An Account?</Link>
          </div>
      
        </div>
      </div>
              </div>
            </div>
          );
};

export default Login;