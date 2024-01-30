import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/createuser" className="nav-link">Create User</Link>
        </li>
        <li className="nav-item">
          <Link to="/apidata" className="nav-link">API Data</Link>
        </li>
        <li className="nav-item">
          <Link to="/userupdate" className="nav-link">User Update</Link>
        </li>
        <li className="nav-item">
          <Link to="/deletdata" className="nav-link">Delete Data</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
