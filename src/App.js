import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./styles/navbar.css"
import "./styles/home.css"
import "./styles/userRoom.css"

import UserRoom from './pages/userDashboard/UserRoom'
import User from './pages/Admin/User'
import Room from './pages/Admin/Room'

const App = () => {
  return (
    <div>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-room" element={<UserRoom/>}/>
        <Route path="/admin-user" element={<User/>}/>
        <Route path="/admin-room" element={<Room/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App