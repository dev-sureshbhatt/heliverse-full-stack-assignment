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



/// for filters
const [searchQuery, setSearchQuery] = useState("")
const [domainFilter, setDomainFilter] = useState("")
const [genderFilter, setGenderFilter] = useState("")
const [availabilityFilter, setAvailabilityFilter] = useState("")



function handleSearch(ev){

  ev.preventDefault()
  console.log(searchQuery, genderFilter, domainFilter, availabilityFilter)
}



  return (



    <div className=" flex flex-col">

      {/* search form*/}
    <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search By Name" value={searchQuery} onChange={(ev) => setSearchQuery(ev.target.value)} />
        <select value={genderFilter} onChange={(ev) => setGenderFilter(ev.target.value)}>
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <select value={domainFilter} onChange={(ev) => setDomainFilter(ev.target.value)}>
            <option value="">Select Domain</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Business Development">Business Development</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Finance">Finance</option>
            <option value="Management">Management</option>
        </select>
        <input
          type="checkbox"
          checked={availabilityFilter}
          onChange={(ev) => setAvailabilityFilter(ev.target.checked)}
        />
        <button>Submit</button>
    </form>  
      <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        userProfiles.map((_value, index)=>{

          return (
          
          <div key={`div${_value.id}`} className="text-center">
          <ProfileCard variant={"addToTeam"} key={`ProfileCard${_value.id}`} user={_value} />
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
