import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './context'
import axios from 'axios';
import { server_url } from '../utils/api';
export const useUser=()=>{
    return useContext(userContext);
}
const UserProvider = ({children}) => {
    const [user,setUser]=useState();
//     useEffect(()=>{
//         const fetchPeople=async()=>{
            
// try{
//     const {data}=await axios.get(`${server_url}/api/v1/user/userCurrent`,{
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":localStorage.getItem("token")
//         }
//     });
//     if(data?.success){
//         setUser(data?.user);
//     }
// }catch(e){
//     console.log(e)
// }
//         }
// fetchPeople();
//     },[])
  return (
    <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
  )
}

export default UserProvider