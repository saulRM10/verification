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

    // to trigger fetch data 
    const [ loadData, setLoadData] = useState(false); 

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

       // setLoadData(true); 

           //const response =  axios.get('https://api.github.com/repos/saulRM10/my-app/commits'); 
             const response =  axios.get(`https://api.github.com/repos/${user.username}/${user.repo}/commits`); 
            console.log(response); 

            response.then((result) => {
                //console.log(result.data[0].commit.author.date);
                var today = new Date().toISOString().slice(0,-14);
                console.log(today); 
                let foundDate = result.data[0].commit.author.date; 
                console.log(foundDate.slice(0,-10));

                 console.log(today.localeCompare(foundDate)); 
              //  // console.log(typeof(today)); 

                if(today.localeCompare(foundDate)){
                 
                  console.log('loser')
                }else {
                  // you loose 
                  console.log('congrats')
                 }
                //console.log(result.data[0].commit.author.name);
            })
         
      
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
