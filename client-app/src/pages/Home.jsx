import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'

function Home() {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [userProfiles, setUserProfiles] = useState([])

  useEffect(()=>{

    fetch(`http://localhost:4000/api/users?page=${page}&limit=${limit}`).then((res)=>{
res.json().then((data) => {
  setUserProfiles(data.result)
  
})
    })
    

  }, [])
  return (
    <div>
      {userProfiles.map((value, index)=>{
        return <ProfileCard key={index} user={value}/>
      })}
      <Pagination />

    </div>
  )
}

export default Home