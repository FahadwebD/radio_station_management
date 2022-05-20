import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import AddStation from '../AddStation';
import ManageStation from './ManageStation';

const Management = () => {

    const [channels , setChannels] = useState([])
    const {user} = useAuth()

  //read data
  useEffect(() => {
    const url = `https://sheltered-ocean-13586.herokuapp.com/channel/${user.email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setChannels(data));
}, [user.email])

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
            <h1>Manage Your Channel</h1>
            <AddStation></AddStation>

            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5>Name</h5> <div style={{marginRight:'50px'}}><h5>Action</h5></div>
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
        </Container>
        </div>
    );
};

export default Management;