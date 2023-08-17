import React from 'react'
import './Home.css'
import Task from './Task'

const Home = () => {
    

  return (
    
   <div className="main">
    <form id='myform'>
    <input type="text" placeholder='wirter somthing' />
    <textarea name="textarea" id="" placeholder='discription'></textarea>
    <button>add task</button>

    </form>

    <Task/> 
   </div>
  )
}

export default Home