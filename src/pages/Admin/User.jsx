import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { IoAddOutline } from "react-icons/io5";
import { useMoodel } from '../../hooks/useMoodel';
import UserModel from "../../model/User"
const User = () => {

    const studentData = [
        {
            sNo: 1,
            studentName: "Vikarm",
            branch: "Computer Science",
            sem: "6th",
            session: "2022-2023",
            hostelName: "Hostel A",
            roomNo: "101",
            roomType: "Single",
            access: "Full"
        },
        {
            sNo: 2,
            studentName: "Ravi",
            branch: "Electrical Engineering",
            sem: "4th",
            session: "2022-2023",
            hostelName: "Hostel B",
            roomNo: "202",
            roomType: "Double",
            access: "Limited"
        },
        {
            sNo: 3,
            studentName: "Motka",
            branch: "Mechanical Engineering",
            sem: "8th",
            session: "2022-2023",
            hostelName: "Hostel C",
            roomNo: "303",
            roomType: "Single",
            access: "Full"
        },
        {
            sNo: 4,
            studentName: "Katihar wali",
            branch: "Civil Engineering",
            sem: "2nd",
            session: "2022-2023",
            hostelName: "Hostel D",
            roomNo: "404",
            roomType: "Double",
            access: "Full"
        }
    ];
    const {open,handleOpen,handleClose}=useMoodel();
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
                <input type="search" className='form-control w-75' placeholder='search...'/>
               </div>
            </div>
            <hr />
            <div className="">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Student Name</th>
      <th scope="col">Branch</th>
      <th scope="col">Sem</th>
      <th scope="col">Session</th>
      <th scope="col">Hostel Name</th>
      <th scope="col">Room No</th>
      <th scope="col">Room Type</th>
      <th scope="col">Acess</th>



    </tr>
  </thead>
  <tbody>
  {studentData.map(student => (
            <tr key={student.sNo}>
              <td>{student.sNo}</td>
              <td>{student.studentName}</td>
              <td>{student.branch}</td>
              <td>{student.sem}</td>
              <td>{student.session}</td>
              <td>{student.hostelName}</td>
              <td>{student.roomNo}</td>
              <td>{student.roomType}</td>
              <td>{student.access}</td>
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
    />
    </AdminLayout>
  )
}

export default User