import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import ParticlesContainer from '../ParticlesContainer/ParticlesContainer';





const Register = () => {

  const [loginData, setLoginData] = useState({});
  
  const {registerUser , isLoading , user , authError , loginUser} = useAuth();

  const history = useNavigate();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
     
      setLoginData(newLoginData);
      console.log(newLoginData)
 
  }

  const handleLoginSubmit = e => {
     
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  }


    return (
        <div>
             <ParticlesContainer></ParticlesContainer>
         <div style={{marginTop:'50px'}}>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img  src='https://www.pngkey.com/png/full/436-4369658_radio-cartoon.png' id="icon" alt="User Icon" />
    </div>

  
    <form  type='submit'  onSubmit={handleLoginSubmit}>
    <input  name="name" type="text"  className="fadeIn second" placeholder="name" onBlur={handleOnChange}/>
      <input  name="email" type="email" id="login" className="fadeIn second"   placeholder="email"onBlur={handleOnChange}/>
      <input  name="password" type="password"  className="fadeIn third" placeholder="password" onBlur={handleOnChange}/>
      <input  type="submit" className="fadeIn fourth" id='bt' value="Log In"/>
     
    </form>
    
    {/* <p style={{color:'red'}}>error</p> */}

    <div className='mb-2'>
      <Button className=' fadeIn fourth' id='bt'  >Google</Button>
      </div>
    <div id="formFooter">
      <Link style={{textDecoration:'none' , color:'black'}} className="underlineHover" to="/login">Already Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
      </div>
    );
};

export default Register;