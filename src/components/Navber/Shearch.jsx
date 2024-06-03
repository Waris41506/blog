import React from 'react'
import "./Shearch.css"


const Shearch = ( {closeShearch}) => {
  return (
    <div className='show-menu'>
        <span className='shearch-span' onClick={closeShearch}>X</span>

        <div className="shearch-inp">
            <input type="text" placeholder='Search.....' />
        </div>
            
    </div>
  )
}

export default Shearch