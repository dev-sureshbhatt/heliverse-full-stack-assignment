import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(20);
  const [userProfiles, setUserProfiles] = useState([]);
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()

  useEffect(() => {
    fetch(`http://localhost:4000/api/users?page=${page}&limit=${limit}`).then(
      (res) => {
        res.json().then((data) => {
          setUserProfiles(data.result)
          setNextPage(data.next?.page)
          setPrevPage(data.prev?.page)
        })
      }
    )
  }, []);


  function handlePageChange(paginationPageNumber){
    fetch(`http://localhost:4000/api/users?page=${paginationPageNumber}&limit=${limit}`).then(
      (res) => {
        res.json().then((data) => {
          setUserProfiles(data.result)
          setNextPage(data.next?.page)
          setPrevPage(data.prev?.page)
        })
      }
    )
  }





  return (
    <div className=" flex flex-col">
      
      <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        userProfiles.map((_value, index)=>{

          return (
          
          <div className="text-center">
          <ProfileCard variant={"addToTeam"} key={_value.id} user={_value} />
          </div>
          
      
          )
        })
      }
    
    
      </div>
    
    <div>
    <Pagination prevPage={prevPage} page={page} nextPage={nextPage} onPageChange={handlePageChange}/>
    </div>
    </div>
  );
}

export default Home;
