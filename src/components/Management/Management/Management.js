import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import AddStation from '../AddStation';
import ManageStation from './ManageStation';
import LogoutIcon from '@mui/icons-material/Logout';
const Management = () => {

    const [channels , setChannels] = useState([])
    const {user , logout} = useAuth()
 console.log(user)
  //read data
  useEffect(() => {
    const url = `https://sheltered-ocean-13586.herokuapp.com/channel/${user.email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setChannels(data));
}, [user])

console.log(channels)
const handleStationDelete = (_id) =>{
     
    const url=`https://sheltered-ocean-13586.herokuapp.com/channel/${_id}`
    fetch(url, {
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data=>{
      if(data.deletedCount>0){
       
        alert('delete')
     
        const remaining = channels?.filter(channel => channel._id !== _id)
        
        setChannels(remaining)
      }
    })
  }

    return (
        <div>
            <Container>
            <div>
            <h1 style={{color:'white'}}>Manage Your Channel</h1>
            <AddStation></AddStation>

            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5 style={{color:'white'}}>Name</h5> <div style={{marginRight:'50px'}}><h5 style={{color:'white'}}>Action</h5></div>
        </div>
        <hr />
        
         <div>
                {
                    channels?.map(station => <ManageStation
                        
                        key={station._id}
                        station={station}
                        handleStationDelete={handleStationDelete}
                      
                        
                       >  </ManageStation>)
                }
            </div>
        
        </div>
        <Button onClick={logout} style={{ backgroundColor:"#ff8abe" , color:'white',position:'absolute' , right:'0', bottom:'0'}} variant="contained" endIcon={<LogoutIcon />}>Log Out</Button>
        </Container>

        </div>
    );
};

export default Management;