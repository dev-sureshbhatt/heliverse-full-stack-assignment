import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [userProfiles, setUserProfiles] = useState([]);
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [searchQuery, setSearchQuery] = useState("")
const [domainFilter, setDomainFilter] = useState("")
const [genderFilter, setGenderFilter] = useState("")
const [availabilityFilter, setAvailabilityFilter] = useState("")

  useEffect(() => {
    fetch(`https://heliverse-full-stack-assignment.onrender.com/api/users?page=${page}&limit=${limit}`).then(
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
    fetch(`https://heliverse-full-stack-assignment.onrender.com/api/users?page=${paginationPageNumber}&limit=${limit}`).then(
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




function handleSearch(ev){
  ev.preventDefault()
  const queryParams = new URLSearchParams({
    page: page,
    limit: limit,
    first_name: searchQuery,
    gender: genderFilter,
    available: availabilityFilter,
    domain: domainFilter
  })

  fetch(`https://heliverse-full-stack-assignment.onrender.com/api/users?${queryParams}`).then(
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



    <div className="flex flex-col">

      {/* search form*/}
      {/* flex flex-wrap gap-4 mt-4 mb-4 justify-center align-middle text-center items-center */}
      {/* flex flex-wrap gap-4 mt-4 mb-4 justify-center align-middle text-center items-center sm:flex-col */}
      {/* flex flex-wrap gap-4 mt-4 mb-4 justify-center align-middle text-center items-center sm:flex-row sm:flex-wrap sm:justify-start sm:gap-2 */}
      {/* flex flex-wrap gap-4 mt-4 mb-7 justify-center align-middle text-center items-center */}
    <form className="flex flex-wrap gap-4 mt-4 mb-4 justify-center align-middle text-center items-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2" onSubmit={handleSearch}>
        <input className="" type="text" placeholder="Search By Name" value={searchQuery} onChange={(ev) => setSearchQuery(ev.target.value)} />
        <select value={genderFilter} onChange={(ev) => setGenderFilter(ev.target.value)}>
            <option value={null}>Select Gender</option>
            <option value="Polygender">Polygender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <select value={domainFilter} onChange={(ev) => setDomainFilter(ev.target.value)}>
            <option value={null}>Select Domain</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Business Development">Business Development</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Finance">Finance</option>
            <option value="Management">Management</option>
        </select>
        <div className="flex justify-center items-center gap-4">
        <label htmlFor="availabilityCheckBox">Availability</label>
        <input
          id="availabilityCheckBox"
          type="checkbox"
          checked={availabilityFilter}
          onChange={(ev) => setAvailabilityFilter(ev.target.checked)}
        />
        </div>
        
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
    
    <div className="mt-10 mb-10">
    <Pagination prevPage={prevPage} page={page} nextPage={nextPage} onPageChange={handlePageChange}/>
    </div>
    </div>
  );
}

export default Home;
