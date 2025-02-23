import React, { useState } from 'react'


const Cards = () => {
  
  let [count , setcount] = useState(0)

  function increase(){
     setcount(count = count +1)
     console.log(" i am clicked")
     document.body.style.backgroundColor = 'blue'


  }
  return (
   <>
   <div className="card" style={{border:'2px solid black' , height:"50vh" , width:"50vw" }}>
    
    <div className="head " style={{textAlign:'center'}}  >Timer</div>
   <div className="count" style={{textAlign:'center'}}>Count : {count}</div>
   <div>
    <button onClick={increase} style={{margin:'auto'}}>Click me</button>
   </div></div>
   </>
  )
}

export default Cards
