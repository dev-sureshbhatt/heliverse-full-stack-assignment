import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";

function Home() {
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
        });
      }
    );
  }, []);

  return (
    <div>
      {userProfiles.map((value, index) => {
        return <ProfileCard key={index} user={value} />;
      })}
      <Pagination prevPage={prevPage} nextPage={nextPage}/>
    </div>
  );
}

export default Home;
