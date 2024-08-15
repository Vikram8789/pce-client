import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import axios from 'axios';
import { server_url } from '../utils/api';
import { useNavigate } from 'react-router-dom';

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
  borderRadius: "20px",
  border: "0",
  outline: "0",
  overflow: 'auto',
};

const User = (

  { open, handleClose,loading,setloading }
) => {

  const [studentName, setStudentName] = useState('');

  const [regNo, setRegNo] = useState('');

  const [floor, setFloor] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [roomType, setRoomType] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const naviagte = useNavigate();
  const validate = () => {
    handleClose()
    const newErrors = {};
    if (!studentName) newErrors.studentName = 'Student Name is required';
    if (!regNo) newErrors.regNo = 'Registration No is required';

    if (!floor) newErrors.floor = 'floor is required';
    if (!roomNo) newErrors.roomNo = 'Room No is required';
    if (!hostelName) newErrors.hostelName = 'Hostel Name is required';
    if (!roomType) newErrors.roomType = 'Room Type is required';
    return newErrors;


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form submitted successfully');
      // Perform form submission logic here
      try {
        // userName, regNo, password, hostelName, floor
        //   , roomType, roomNo,userRole
        const { data } = await axios.post(`${server_url}/user`, {
          regNo: regNo,
          userName: studentName,
          hostelName: hostelName,
          floor: floor,
          roomType: roomType,
          roomNo: roomNo,
          password: password

        }, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          }
        });
        if (data.success) {
          alert(`${data.message}`);
          setloading(!loading)
handleClose();


        } else {
          alert(`${data.message}`)
        }
      } catch (e) {
        console.log(e)
        alert(e.response?.data?.message || "An error occurred");

      }
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
            <label htmlFor="password" className="form-label ">Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Password"
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
            <label htmlFor="floor" className="form-label ">Floor</label>

            <select class="form-select" aria-label="Default select example"
              onChange={(e) => setFloor(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>





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

            <select class="form-select" aria-label="Default select example"
              onChange={(e) => setHostelName(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="CV Raman">CV Raman</option>
              <option value="APJ">APJ</option>
              <option value="Mother Tresa">Mother Tresa</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="roomType" className="form-label ">Room Type</label>
            <select class="form-select" aria-label="Default select example"
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="Single">Single</option>
              <option value="Triple">Triple</option>

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