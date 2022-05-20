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

const ManageStation = ({station }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = React.useState();
    const [time, setTime] = React.useState();
    const [price, setPrice] = React.useState();
    const [space, setSpace] = React.useState();



    const handleChange = (event) => {
        setSpace(event.target.value);
      };
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleTimeChange = (event) => {
        setTime(event.target.value);
      };
      const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };

      const handleServiceSubmit = e => {
    //     const _id = service._id
      
    //     const updateService = {
    //         name,
    //         time,
    //         price: parseInt(price),
    //         space : parseInt(space),
    //         _id
            
    //     }
    //    console.log(updateService)
   
    //    fetch('https://floating-cliffs-15059.herokuapp.com/services/edit', {
    //        method: 'PUT',
    //        headers: {
               
    //            'content-type': 'application/json'
    //        },
    //        body: JSON.stringify(updateService)
    //    })
    //        .then(res => res.json())
    //        .then(data => {
    //            if (data.modifiedCount) {
                  
    //                console.log('ok')
    //            }
    //        })

      

        e.preventDefault();
    }



    return (
        <div>
            <div>
               
            </div>
            <div style={{display:"flex" , justifyContent:'space-between'}}>
            <h5>{station.name}</h5> <div><Button style={{backgroundColor:'green' , color:'white'}} onClick={handleOpen}>Update</Button> <Button style={{backgroundColor:'red' , color:'white'}} >Delete</Button></div>
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
            Text in a modal
          </Typography>
          <form onSubmit={handleServiceSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            defaultValue={station.name}
                            onChange={handleNameChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            defaultValue={station.time}
                            onChange={handleTimeChange}
                          
                            size="small"
                        />
                      
                      
                       <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            type="number"
                            
                            defaultValue={station.price}
                            onChange={handlePriceChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="space"
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 10 } }}
                            defaultValue={station.space}
                            onChange={handleChange}
                          
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