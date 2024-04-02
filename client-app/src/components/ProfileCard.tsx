import React from 'react'
import {add} from '../store/teamSlice'
import {useDispatch} from 'react-redux'

export default function ProfileCard({ user }){
  const dispatch = useDispatch()

  function handleAdd(){
    dispatch(add(user))
    console.log(user.first_name)
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-1/5">
      <img
        className="border-2 border-black w-16 h-16 rounded-full mx-auto"
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.gender}</p>
        <p className="text-gray-600">{user.domain}</p>
        <p className="text-gray-600">{user.availability}</p>
      </div>
      <button onClick={handleAdd}>Add to team</button>
    </div>
  );
};

