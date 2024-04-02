import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../components/ProfileCard'

function Team() {
  const teamMembers = useSelector(state => state.team)
  return (
    <div>
      <h3>My Team Members</h3>
      
<div>
      {teamMembers.map((_value, index) => {
        return (
        <ProfileCard variant={"removeFromTeam"} key={`ProfileCard${_value.id}`} user={_value} />
      )
      })}
      </div>
      
    </div>
  )
}

export default Team