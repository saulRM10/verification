import React, { useState, useEffect} from 'react';
import axios from 'axios';

// to try and fix regen error 
import regeneratorRuntime from "regenerator-runtime";
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

        // create a new object 
        const user = { username, repo }; 

        
        // console.log(user.username)
        // make github api call 
        // it will return a promise 
         //const response = axios.get(`https://api.github.com/repos/${user.username}/${user.repo}/commits`); 
         //console.log(response); 
    }
    const url = 'https://api.github.com/repos/saulRM10/my-app/commits/master'
    const fetchData = async () =>{
        try{
          const response = await axios.get(url); 
          console.log(response); 
        }
        catch(error){
          console.log(error.response)
        }
    }

    useEffect(()=>{
      fetchData(); 
    }, []); 

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
