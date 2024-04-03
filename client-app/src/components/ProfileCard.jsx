import React, { useState } from "react";
import { add, remove } from "../store/teamSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileCard({ user, variant }) {


  const [buttonLabel, setButtonLabel] = useState(user.available ? "Add to Team" : "Not Available")
  const [errorMessage, setErrorMessage] = useState("")
  
  const dispatch = useDispatch();
  const teamState = useSelector((state) => state.team) 
  

  function handleAdd() {

    
    const existingDomain = teamState.find(_user => _user.domain === user.domain)
    
    
    
    if (user.available && !existingDomain){
      dispatch(add(user))
      setButtonLabel("Added")
    } else if (existingDomain) {
      setErrorMessage("User with similar domain is already added to the team")
    }
    
    
  }

  function handleRemove(){
    dispatch(remove(user.id))
    console.log("firstname is", user.first_name)

  }
  
  switch(variant) {
    case "addToTeam":
      return (



        <div className="bg-white flex shadow-md flex-col gap-3 items-center justify-center text-center w-[200px] h-[200px]">
          <img height={"60px"} width={"60px"} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.domain}</p>
          </div>
          {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
          <button disabled={!user.available} onClick={handleAdd}>{buttonLabel}</button>
        </div>
      )
    case "removeFromTeam": 
    return (



      <div className="bg-white flex shadow-md flex-col gap-3 items-center justify-center text-center w-[200px] h-[200px]">
        <img height={"60px"} width={"60px"} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <div>
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.domain}</p>
          <p>{user.availability}</p>
        </div>
        <button onClick={handleRemove}>Remove from Team</button>
      </div>
    ) ;
    default: return null

  }


}
