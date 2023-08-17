import React,{useState} from 'react'

const Home = () => {
    const [invalue ,setinvalue]=useState( 'myname');
    const [num ,setnum]=useState( 0);

    const increment =()=>{
        setnum(num +1)
    }

  return (
    <div className="inp">
        <input style={{margin:'20px'}} type="text" placeholder='enter somthing'
         onChange={(e)=>{
            setinvalue(e.target.value)
         }}
         
        />
        {console.log(invalue)}
        

        <h3>{invalue}</h3>

        <h2>{num}</h2>
        <button onClick={increment}>click</button>
    </div>
  )
}

export default Home