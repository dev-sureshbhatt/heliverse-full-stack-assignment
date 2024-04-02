import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <span>Heliverse Technologies</span>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/team'}>My team</Link>
            <span>My Team Members: 0</span>
        </div>
    </div>
  )
}

export default Navbar