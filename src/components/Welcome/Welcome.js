import { Button } from '@mui/material';
import React, { memo } from 'react';
import SendIcon from '@mui/icons-material/Send';
import radio from '../../img/981f792d40ad5d58d51ba0b86dfc8950.gif'
import { Link } from 'react-router-dom';
const Welcome = memo(() => {
    return (
        <div>
             <img src={radio} alt="" srcset="" style={{width:'300px', height:'300px'}} />
             <div><h1 style={{color:'white'}}>Manage Your Station</h1></div>
             <div> <Button component={Link} to="login" style={{backgroundColor:"#ff8abe"}}  variant="contained" endIcon={<SendIcon />}>
        JOIN
      </Button></div>
        </div>
    );
});

export default Welcome;