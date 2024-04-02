import React, { useState } from 'react'

function handleNext(){
    console.log("next")
}

function handlePrev(){
    console.log("prev")
}

function Pagination({nextPage, prevPage}) {


  return (
    <div>
        <button disabled={!prevPage} onClick={handlePrev}>{`Prev Page: ${prevPage}`}</button>
 v      <button disabled={!nextPage} onClick={handleNext}>{`Next Page: ${nextPage}`}</button>
    </div>
  )
}

export default Pagination