import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const teamMembers = useSelector(state => state.team.length)
  return (
    <div>
        <span>Heliverse Technologies</span>
        <div>
          {/* using a tag below to refresh the page - so that the page fetches all results again irrespective of the filter */}
            <a href={'/'}>Home</a> 
            <Link to={'/team'}>My team</Link>
            <span>{`My Team Members: ${teamMembers}`}</span>
        </div>
    </div>
  )
}

export default Navbar