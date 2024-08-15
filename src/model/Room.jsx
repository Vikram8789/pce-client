import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:"20px",
    border:"0",
    outline:"0",
    overflow: 'auto',
};

const Room = (
    {open,handleClose}
) => {
   
    const [roomNo, setRoomNo] = useState('');
    const [hostelName, setHostelName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [floor, setFloor] = useState('');

    const [errors, setErrors] = useState({});

    const validate = () => {
        handleClose()
      const newErrors = {};
      if (!roomNo) newErrors.roomNo = 'Room No is required';
      if (!hostelName) newErrors.hostelName = 'Hostel Name is required';
      if (!roomType) newErrors.roomType = 'Room Type is required';
      if (!floor) newErrors.roomType = 'floor  is required';
     
      return newErrors;

     
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setErrors({});
        console.log('Form submitted successfully');
        // Perform form submission logic here
      }
    };
  return (
    
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="hidden-scrollbar">
      <div className="row">
      
      
     
     
    
      <div className="mb-3">
        <label htmlFor="roomNo" className="form-label ">Room No</label>
        <input
          type="text"
          onChange={(e) => setRoomNo(e.target.value)}
          className="form-control"
          id="roomNo"
          placeholder="Room No"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hostelName" className="form-label ">Hostel Name</label>
        {/* <input
          type="text"
          onChange={(e) => setHostelName(e.target.value)}
          className="form-control"
          id="hostelName"
          placeholder="Hostel Name"
        /> */}


<select class="form-select" aria-label="Default select example"
onChange={(e) => setHostelName(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">PCE HOSTAL</option>
  <option value="2">APJ Hostel</option>
  <option value="3">Mother Tresa</option>
</select>
      </div>
      <div className="mb-3">
        <label htmlFor="roomType" className="form-label ">Room Type</label>
        {/* <input
          type="text"
          onChange={(e) => setRoomType(e.target.value)}
          className="form-control"
          id="roomType"
          placeholder="Room Type"
        /> */}
<select class="form-select" aria-label="Default select example"
     onChange={(e) => setRoomType(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">Single</option>
  <option value="2">Double</option>
  <option value="3">Triple</option>
</select>
<div className="mb-3">
        <label htmlFor="floorNo" className="form-label ">Floor</label>
        {/* <input
          type="text"
          onChange={(e) => setRoomType(e.target.value)}
          className="form-control"
          id="floorNo"
          placeholder="Floor"
        /> */}
        <select class="form-select" aria-label="Default select example"
      onChange={(e) => setRoomType(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">Ground</option>
  <option value="2">First</option>
  <option value="3">Second</option>
  <option value="3">Third</option>

</select>
      </div>
<div className="mb-3">
    <button className="btn btn-success"
    onClick={handleSubmit}
    
    >
        Submit
    </button>
</div>

      </div>
      </div>
      </Box>
    </Modal>

  )
}

export default Room