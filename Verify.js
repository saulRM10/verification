import React, { useState, useEffect} from 'react';


// function to handle user input 
// function handleChange (evt) {

// }

function Verify(){

    // store user info; username, repo 
    const [username, setUsername] = useState(''); 
    const [repo, setRepo] = useState(''); 

    const handleUsername = (evt) => {
      setUsername(evt.target.value)
    }; 

    const handleRepo = (evt) => {
      setRepo(evt.target.value)
    }; 

    const handleSubmit = (evt) => {
        evt.preventDefault() // keep the page from reloading after submission 
    }
    return (
      <div> 
         <form onSubmit={handleSubmit}> 

         <label> Username: </label>
        <input 
          onChange={handleUsername} 
          type="text" 
          placeholder="username" 
          value={username}

          /> 

        <label> Repository: </label>
        <input 
           onChange={handleRepo}
          type="text" 
          placeholder="repository" 
          value={repo} 
   
          />

         <button > verify </button>

         </form>
       </div>
    )
};

export default Verify; 
