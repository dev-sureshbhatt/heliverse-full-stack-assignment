import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const teamMembers = useSelector(state => state.team.length)
  return (
    <div>
        <span>Heliverse Technologies</span>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/team'}>My team</Link>
            <span>{`My Team Members: ${teamMembers}`}</span>
        </div>
    </div>
  )
}

export default Navbar