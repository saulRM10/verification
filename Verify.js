import React, { useState } from 'react';


// function to handle user input 
// function handleChange (evt) {

// }

function Verify(){

    // store user info; username, repo 
    const [user, setUser] = useState({
        username : '',
        repo : ''
    }); 

    const handleChange = (evt) => {
      console.log(evt.target.value)
    }; 

    return (
       <div> 

        <input onChange={handleChange} type="text" placeholder="username" name="username" /> 
        <input onChange={handleChange} type="text" placeholder="repository" name="repository" />

         <button onClick={handleChange(evt)}> verify </button>

       </div>
    )
};

export default Verify; 
