import React, { useState } from 'react'


function Pagination({nextPage, prevPage, page, onPageChange}) {

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
    <div className='flex gap-6 justify-center'>
        <button disabled={!prevPage} onClick={handlePrev} >{`Prev`}</button>
        <button disabled={!nextPage} onClick={handleNext}>{`Next`}</button>
    </div>
  )
}

export default Pagination