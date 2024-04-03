import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";

function Team() {

  const [teamName, setTeamName] = useState("")
  const teamMembersState = useSelector((state) => state.team);

  function handleCreateTeam(ev){
    ev.preventDefault()
    
    //to fetch array of only IDS so that we can save it to the DB and reference to respective user profiles
    const teamMembersId = teamMembersState.map(value => value._id)

    fetch("http://localhost:4000/api/team", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({teamName, user: teamMembersId})
    })

    
  }
  




  return (
    <div>
      <h3>My Team Members</h3>

      <div>
        {teamMembersState.map((_value, index) => {
          return (
            <ProfileCard
              variant={"removeFromTeam"}
              key={`ProfileCard${_value.id}`}
              user={_value}
            />
          );
        })}
      </div>
      <form onSubmit={handleCreateTeam}>
      <input type="text" placeholder="Hello" value={teamName} onChange={(ev) => setTeamName(ev.target.value)} />
      <button>Create Team</button>
      </form>
    </div>
  );
}

export default Team;
