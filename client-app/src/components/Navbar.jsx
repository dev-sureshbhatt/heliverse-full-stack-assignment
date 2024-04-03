import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const teamMembers = useSelector(state => state.team.length)
  return (
    <div className='sticky top-0 bg-[#3B3E47] shadow-2xl flex justify-between mt-10 mb-8 p-5 w-full'>
        <a className='sm:text-xl text-sm' href={'/'}>Heliverse Technologies</a>
        <div>
          {/* using a tag below to refresh the page - so that the page fetches all results again irrespective of the filter */}
            <Link to={'/team'}>
            <span className='sm:text-xl text-sm'>{`My Team Members: ${teamMembers}`}</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar