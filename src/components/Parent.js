import React, { useState } from 'react'
import Child from './Child';
function Parent() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className='parent'>
        <h1>Parent Component</h1>
        <Child loggedIn={isLoggedIn} change={setIsLoggedIn}/>
    </div>
  )
}

export default Parent