import React from "react";
import { add } from "../store/teamSlice";
import { useDispatch } from "react-redux";

export default function ProfileCard({ user, variant }) {
  console.log(variant)
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(add(user));
    console.log(user.first_name);
  }
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
      <button onClick={handleAdd}>Add to team</button>
    </div>
  );
}
