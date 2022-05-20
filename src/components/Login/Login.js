import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import ParticlesContainer from '../ParticlesContainer/ParticlesContainer';
import './Login.css'



const Login = () => {


    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle ,logout } = useAuth();

    const history = useNavigate();

 const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

}

 const handleLoginSubmit = e => {
   
    loginUser(loginData.email , loginData.password , loginData.name, history)
     e.preventDefault();
 }
 const handleGoogleSignIn = () => {
    signInWithGoogle( history)
}

    return (
        <div>
             <ParticlesContainer></ParticlesContainer>
              <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src='' id="icon" alt="User Icon" />
    </div>

  
    <form  type='submit'  onClick={handleLoginSubmit}>
    
      <input  name="email" type="email" id="login" className="fadeIn second"   placeholder="email" onBlur={handleOnChange}/>
      <input  name="password" type="password"  className="fadeIn third" placeholder="password"  onBlur={handleOnChange}/>
      <input  type="submit" className="fadeIn fourth" id='bt' value="Log In"/>
     
    </form>
    
    {/* <p style={{color:'red'}}>error</p> */}

    <div className='mb-2'>
      <Button onClick={handleGoogleSignIn} className=' fadeIn fourth' id='bt'  >Google</Button>
      </div>
    <div id="formFooter">
      <Link style={{textDecoration:'none' , color:'black'}} className="underlineHover" to="/register">Already Have An Account?</Link>
    </div>

  </div>
</div>
            <h1 style={{color:'white'}}>Name : {user?.email}</h1>
            
            {user?.email?<button onClick={logout}>Log Out </button>:<button onClick={handleGoogleSignIn}>Google</button>}
        </div>
    );
};

export default Login;