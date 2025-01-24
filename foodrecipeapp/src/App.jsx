//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React,{useState} from 'react'
import './App.css'
import Product from './Product';

function App() {
  const [search,setSearch]= useState('');
  const [data,setData] = useState([]);
  const APP_ID = "a52b4d43" ;
  const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";



  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
    
  }

  

  return (
    <div>
      <center>
        <h1>S&T Cravings</h1>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={(e) =>setSearch(e.target.value)}/><br/><br/>
          <input type='submit' value='search' className='btn btn-primary'/><br/>
        </form><br/>
        {data.length>=1 ? <Product data={data}/>:null}

      </center>
      
    </div>
   
  )
}

export default App
