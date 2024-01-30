import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateUser from './CreateUser'
import ApiData from './ApiData'
import UserUpdate from './UserUpdate'
import DeletData from './DeletData'
import Navbar from './Navbar'

function App() {
  return (
    <div>    
      <Navbar/>  
      <Routes>
        <Route path="/createuser" element={<CreateUser/>} />
        <Route path="/apidata" element={<ApiData/>} />
        <Route path="/userupdate" element={<UserUpdate/>} />
        <Route path="/deletdata" element={<DeletData/>} />
      </Routes>
    </div>
  )
}

export default App