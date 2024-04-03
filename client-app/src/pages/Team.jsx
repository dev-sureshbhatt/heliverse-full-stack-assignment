import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";

function Team() {
  const teamMembersState = useSelector((state) => state.team);

  function handleCreateTeam(){
    console.log(teamMembersState)
    const teamMembersId = teamMembersState.map(value => value._id)
    console.log(teamMembersId)

    
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
      <button onClick={handleCreateTeam}>Create Team</button>
    </div>
  );
}

export default Team;
