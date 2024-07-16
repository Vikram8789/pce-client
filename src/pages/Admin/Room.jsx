import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { IoAddOutline } from "react-icons/io5";
import { useMoodel } from '../../hooks/useMoodel';
import RoomModel from "../../model/Room"
const Room = () => {
  const {open,handleOpen,handleClose}=useMoodel();
    const roomData = [
        {
          sNo: 1,
          hostelName: "Hostel A",
          floor: "1st",
          roomType: "Single",
          roomNo: "101"
        },
        {
          sNo: 2,
          hostelName: "Hostel B",
          floor: "2nd",
          roomType: "Double",
          roomNo: "202"
        },
        {
          sNo: 3,
          hostelName: "Hostel C",
          floor: "3rd",
          roomType: "Single",
          roomNo: "303"
        },
        {
          sNo: 4,
          hostelName: "Hostel D",
          floor: "4th",
          roomType: "Double",
          roomNo: "404"
        }
      ];
      

  return (
    <AdminLayout>
      <div className="container my-5">
        <div className="card p-2">
            <div className="">
               <div className="d-flex justify-content-between align-items-center w-100">
               <button className="btn btn-success"
               onClick={()=>handleOpen()}
               >
                   <IoAddOutline/> Add Room
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
      <th scope="col">Hostel Name</th>
      <th scope="col">Fllor</th>
      <th scope="col">Room Type</th>
      <th scope="col">Room No</th>
      



    </tr>
  </thead>
  <tbody>
  {roomData.map(room => (
            <tr key={room.sNo}>
              <td>{room.sNo}</td>
              <td>{room.hostelName}</td>
              <td>{room.floor}</td>
              <td>{room.roomType}</td>
              <td>{room.roomNo}</td>
            </tr>
          ))}
    
   
  </tbody>
</table>
            </div>
        </div>
      </div>
      <RoomModel
      open={open}
      handleClose={handleClose}
      />
    </AdminLayout>
  )
}

export default Room