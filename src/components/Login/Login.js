import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';

const Login = () => {


    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError ,logout } = useAuth();
 console.log(user)


    return (
        <div>
            <h1>Name : {user?.email}</h1>
            
            {user?.email?<button onClick={logout}>Log Out </button>:<button onClick={signInWithGoogle}>Google</button>}
        </div>
    );
};

export default Login;