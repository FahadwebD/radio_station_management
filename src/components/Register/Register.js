import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';




const Register = () => {

  const [loginData, setLoginData] = useState({});
  
  const {registerUser , isLoading , user , authError} = useAuth();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
     
      setLoginData(newLoginData);
 
  }

  const handleLoginSubmit = e => {
     
     registerUser(loginData.email , loginData.password , loginData.name)
      e.preventDefault();
  }
    return (
        <div>
         <div style={{marginTop:'50px'}}>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img  id="icon" alt="User Icon" />
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