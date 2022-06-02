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

    return (
       <div> 

        <input type="text" placeholder="username" /> 
        <input type="text" placeholder="repository" />

         <button> verify </button>
       </div>
    )
};

export default Verify; 
