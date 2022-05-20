import React, { useEffect, useState } from 'react';
import AddStation from '../AddStation';
import ManageStation from './ManageStation';

const Management = () => {

    const [station , setStation] = useState()

    useEffect(()=>{


        fetch('https://floating-cliffs-15059.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setStation(data))


    },[])

    return (
        <div>
           
            <div>
            <h1>Manage Your Channel</h1>
            <AddStation></AddStation>

            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5>Name</h5> <div style={{marginRight:'50px'}}><h5>Action</h5></div>
        </div>
        <hr />
            <div>
                {
                    station?.map(station => <ManageStation
                        
                        key={station._id}
                        station={station}
                      
                        
                       >  </ManageStation>)
                }
            </div>
        </div>
        </div>
    );
};

export default Management;