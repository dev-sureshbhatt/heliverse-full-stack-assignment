import React, { useState } from "react";
import { add, remove } from "../store/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import '../App.css'

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



        <div className="bg-[#3B3E47] flex shadow-md flex-col gap-3 items-center justify-center text-center w-[250px] h-[320px]">
          <img className="border-[#738FFF] border-2 rounded-full" height={"60px"} width={"60px"} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <div className="text-center mt-1">
          
            <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
            <p className="mt-4">{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.domain}</p>
          </div>
          {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
          <button disabled={!user.available} onClick={handleAdd}>{buttonLabel}</button>
        </div>
      )
    case "removeFromTeam": 
    return (
            <div className="bg-[#3B3E47] flex shadow-md flex-col gap-3 items-center justify-center text-center w-[250px] h-[300px]">
        <img className="border-[#738FFF] border-2 rounded-full" height={"60px"} width={"60px"} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <div className="text-center mt-1">
          <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
          <p className="mt-4">{user.email}</p>
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
