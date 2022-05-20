import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ManageStation = ({station , handleStationDelete}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = React.useState();
    const [region, setRegion] = React.useState();
    const [channel, setChannel] = React.useState();
   



      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleRegionChange = (event) => {
        setRegion(event.target.value);
      };
      const handleChannelChange = (event) => {
        setChannel(event.target.value);
      };

      const handleStationSubmit = e => {
        const _id = station._id
      
        const updateStation = {
            name,
            region,
            channel: parseInt(channel),
            _id
            
            
        }
       console.log(updateStation)
   
       fetch('https://sheltered-ocean-13586.herokuapp.com/channel/edit', {
           method: 'PUT',
           headers: {
               
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateStation)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }



    return (
        <div>
            <div>
               
            </div>
            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5 style={{color:'white'}}>{station.name}</h5> <div><Button style={{backgroundColor:'green' , color:'white'}} onClick={handleOpen}>Update</Button> <Button onClick={()=>handleStationDelete (station._id)} style={{backgroundColor:'red' , color:'white'}} >Delete</Button></div>
        </div>
        <hr />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Update Information of Station
          </Typography>
          <form onSubmit={handleStationSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            label='Name'
                            defaultValue={station.name}
                            onChange={handleNameChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                            lebel='Region'
                            
                            defaultValue={station.region}
                            onChange={handleRegionChange}
                          
                            size="small"
                        />
                      
                      
                       <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            type="number"
                            lebel='chanelNo'
                            defaultValue={station.channelNo}
                            onChange={handleChannelChange}
                          
                            size="small"
                        />
                        
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>

                        </form>
        </Box>
      </Modal>
        </div>
    );
};

export default ManageStation;