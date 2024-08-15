import React ,{useState,useEffect}from 'react'
import AdminLayout from '../../components/AdminLayout'
import { IoAddOutline } from "react-icons/io5";
import { useMoodel } from '../../hooks/useMoodel';
import UserModel from "../../model/User"
import { useNavigate } from 'react-router-dom';
import { server_url } from '../../utils/api';
import axios from 'axios';
const User = () => {
const navigate=useNavigate()
   
    const [students,setStudents]=useState([]);
    const {open,handleOpen,handleClose}=useMoodel();
const [loading,setloading]=useState(false);

    useEffect(()=>{
      const fetchStudents=async()=>{
try{
const {data}=await axios.get(`${server_url}/user`);
if(data?.success){
  const studentInfo=data?.user.filter((s)=>s?.userRole!=="teacher")
  setStudents(studentInfo)
}
}catch(e){
  console.log(e)
}
      }
      fetchStudents()
    },[loading])
  return (
 
    <AdminLayout>
      <div className="container my-5">
        <div className="card p-2">
            <div className="">
               <div className="d-flex justify-content-between align-items-center w-100">
               <button className="btn btn-success"
               onClick={handleOpen}
               >
                   <IoAddOutline/> Add Students
                </button>
               </div>
            </div>
            <hr />
            <div className="">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Student Name</th>
      <th scope="col">Reg.No</th>
      <th scope="col">password</th>
   
      <th scope="col">Hostel Name</th>
      <th scope="col">Floor</th>
      <th scope="col">Room Type</th>
      <th scope="col">Room Number</th>

      <th scope="col">View</th>
      




    </tr>
  </thead>
  <tbody>
  
  {students.map((student,i) => (
            <tr key={student?._id}>
              <td>{i+1}</td>
              <td>{student.userName}</td>
              <td>{student.regNo}</td>
              <td>{student.password}</td>
             
              <td>{student.hostelName}</td>
              <td>{student.floor}</td>
              <td>{student.roomType}</td>
              <td>{student.roomNo}</td>

              <td
              style={{cursor:"pointer",color:"green"}}
              onClick={()=>navigate("/user-room")}
              >Click</td>
            </tr>
          ))}
    
   
  </tbody>
</table>
            </div>
        </div>
      </div>
    <UserModel
    handleClose={handleClose}
    open={open}
    loading={loading} setloading={setloading}
    />
    </AdminLayout>
  )
}

export default User