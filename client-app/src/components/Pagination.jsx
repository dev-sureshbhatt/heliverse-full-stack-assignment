import React, { useState } from 'react'


function Pagination({nextPage, prevPage, currentPage, onPageChange}) {

    function handleNext(){

        if (nextPage)
        {
        onPageChange(nextPage)
        }
    }

    function handlePrev(){

        if (prevPage)
        {
        onPageChange(prevPage)
        }
    
    }


  return (
    <div>
        <button disabled={!prevPage} onClick={handlePrev} >{`Prev Page: ${prevPage}`}</button>
        <p>{currentPage}</p>
        <button disabled={!nextPage} onClick={handleNext}>{`Next Page: ${nextPage}`}</button>
    </div>
  )
}

export default Pagination