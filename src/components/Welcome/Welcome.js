import { Button } from '@mui/material';
import React, { memo } from 'react';
import SendIcon from '@mui/icons-material/Send';
import radio from '../../img/981f792d40ad5d58d51ba0b86dfc8950.gif'
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import ParticlesContainer from '../ParticlesContainer/ParticlesContainer';
import LogoutIcon from '@mui/icons-material/Logout';
import RadioIcon from '@mui/icons-material/Radio';
const Welcome = memo(() => {
    const {user , logout} = useAuth()
    return (
       <div>
            <ParticlesContainer></ParticlesContainer>
            {user?.email?<div>
             <img src={radio} alt="" srcset="" style={{width:'300px', height:'300px'}} />
             <div><h1 style={{color:'white'}}>Welcome Sir</h1></div>
             <div> <Button onClick={logout} style={{backgroundColor:"#ff8abe" , marginRight:'5px'}}  variant="contained" endIcon={<LogoutIcon />}>
       Log Out
      </Button> <Button component={Link} to="manage" style={{backgroundColor:"#ff8abe"}}  variant="contained" endIcon={<RadioIcon />}>
       Manage
      </Button></div>
        </div>:<div>
             <img src={radio} alt="" srcset="" style={{width:'300px', height:'300px'}} />
             <div><h1 style={{color:'white'}}>Manage Your Station</h1></div>
             <div> <Button component={Link} to="login" style={{backgroundColor:"#ff8abe"}}  variant="contained" endIcon={<SendIcon />}>
        JOIN
      </Button></div>
        </div>}
       </div>
    );
});

export default Welcome;