import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../components/ProfileCard'

function Team() {
  const teamMembers = useSelector(state => state.team)

  console.log(teamMembers)
  return (
    <div>
      <h3>My Team Members</h3>
      <p>Hello</p>
<div>
      {teamMembers.map((value, index) => {
        return <ProfileCard variant={"removeFromTeam"} user={value} />
      })}
      </div>
      
    </div>
  )
}

export default Team