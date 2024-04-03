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
    }).then((response) => {response.json().then(data => alert(`${data.msg} with id ${data.createdTeam._id}`)).catch(err => console.log(err))}).catch(err => console.log(error))

    
  }
  




  return (
    <div className="flex flex-col">
      <h3 className="text-center text-xl mb-6 mt-4">Verify your Team Members and Create Team</h3>

      <div className="flex flex-wrap gap-10 items-center justify-center">
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
      <form className="flex justify-center mt-8 mb-8 gap-4" onSubmit={handleCreateTeam}>
      <input type="text" placeholder="Enter team name to create team" value={teamName} onChange={(ev) => setTeamName(ev.target.value)} />
      <button>Create Team</button>
      </form>
    </div>
  );
}

export default Team;
