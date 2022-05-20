import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';




const Login = () => {


    
    const { user,  signInWithGoogle ,logout } = useAuth();
 console.log(user)

 

    return (
        <div >
            <h1 style={{color:'white'}}>Hi from Log in</h1>
            <h1 style={{color:'white'}}>Name : {user?.email}</h1>
            
            {user?.email?<button onClick={logout}>Log Out </button>:<button onClick={signInWithGoogle}>Google</button>} 
        </div>
    );
};

export default Login;