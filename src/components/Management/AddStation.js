
import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import useAuth from '../../hook/useAuth';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
  
};


const AddStation = () => {
    const [open, setOpen] = React.useState(false);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  

    ///insert data

  const onSubmit = data => {
    console.log(data);
    console.log(data);
    const updateData = {
        ...data,
        userEmail:user.email
    }
   console.log(updateData)
    fetch('https://sheltered-ocean-13586.herokuapp.com/channel/add' , {
      method:'POST',
      headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
  })
  .then(res => res.json())
  .then(data => {
      if(data.insertedId){
          alert('success')
         handleClose()
         
      }
  })
 
  }

 
    return (
        <div style={{textAlign:'left'}}>
            <Button style={{backgroundColor:'#ff8abe' , color:'white'}} onClick={handleOpen}>Add Service</Button>
            <div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{textAlign:'center' , padding:'20px'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} />
      <br /><br />
      <input {...register("img")} />
      <br /><br />
      <input type="number" {...register("region", {valueAsNumber: true,})}/>
      <br /><br />
      <input type="number" {...register("channelNo", { min: 1, max: 12 ,valueAsNumber: true})} />

      <br /><br />
      <input type="submit" />
    </form>


          </Box>
        </Fade>
      </Modal>
            </div>
        </div>
    );
};

export default AddStation;