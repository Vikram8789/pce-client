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
    height: '500px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:"20px",
    border:"0",
    outline:"0",
    overflow: 'auto',
};

const User = (
    {open,handleClose}
) => {
    const [studentName, setStudentName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [regNo, setRegNo] = useState('');
    const [branch, setBranch] = useState('');
    const [session, setSession] = useState('');
    const [semester, setSemester] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [hostelName, setHostelName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        handleClose()
      const newErrors = {};
      if (!studentName) newErrors.studentName = 'Student Name is required';
      if (!rollNo) newErrors.rollNo = 'Roll No is required';
      if (!regNo) newErrors.regNo = 'Registration No is required';
      if (!branch) newErrors.branch = 'Branch is required';
      if (!session) newErrors.session = 'Session is required';
      if (!semester) newErrors.semester = 'Semester is required';
      if (!roomNo) newErrors.roomNo = 'Room No is required';
      if (!hostelName) newErrors.hostelName = 'Hostel Name is required';
      if (!roomType) newErrors.roomType = 'Room Type is required';
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
        <label htmlFor="studentName" className="form-label ">Student Name</label>
        <input
          type="text"
          onChange={(e) => setStudentName(e.target.value)}
          className="form-control"
          id="studentName"
          placeholder="Student Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rollNo" className="form-label ">Roll No</label>
        <input
          type="text"
          onChange={(e) => setRollNo(e.target.value)}
          className="form-control"
          id="rollNo"
          placeholder="Roll No"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="regNo" className="form-label ">Registration No</label>
        <input
          type="text"
          onChange={(e) => setRegNo(e.target.value)}
          className="form-control"
          id="regNo"
          placeholder="Registration No"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="branch" className="form-label ">Branch</label>
        {/* <input
          type="text"
          onChange={(e) => setBranch(e.target.value)}
          className="form-control"
          id="branch"
          placeholder="Branch"
        /> */}
  <select class="form-select" aria-label="Default select example"
     onChange={(e) => setBranch(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">ECE</option>
  <option value="2">MECH</option>
  <option value="3">CSE</option>
  <option value="3">CIVIL</option>
  <option value="3">EEE</option>


</select>
      </div>
      <div className="mb-3">
        <label htmlFor="session" className="form-label ">Session</label>
        <input
          type="text"
          onChange={(e) => setSession(e.target.value)}
          className="form-control"
          id="session"
          placeholder="Session"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="semester" className="form-label ">Semester</label>
        {/* <input
          type="text"
          onChange={(e) => setSemester(e.target.value)}
          className="form-control"
          id="semester"
          placeholder="Semester"
        /> */}
         <select class="form-select" aria-label="Default select example"
     onChange={(e) => setSemester(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="3">4</option>
  <option value="3">5</option>
  <option value="3">6</option>

  <option value="3">7</option>
  <option value="3">8</option>




</select>
      </div>
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
  <option value="1">CV Raman Hostel</option>
  <option value="2">APJ Hostel</option>
  <option value="3">Mother Tresa</option>
</select>
      </div>
      <div className="mb-3">
        <label htmlFor="roomType" className="form-label ">Room Type</label>
        <select class="form-select" aria-label="Default select example"
     onChange={(e) => setRoomType(e.target.value)}
>
  <option selected>Open this select menu</option>
  <option value="1">Single</option>
  <option value="2">Double</option>
  <option value="3">Triple</option>
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
      </Box>
    </Modal>

  )
}

export default User