import React, { useState } from 'react'

const Sidebar = () => {
    const [open, setopen] = useState(false)
    const toggle =()=>{
        setopen(!open)
    }

  return (
    <>
    <div>
        <button onClick={toggle} className='bt'style={{position:"fixed" ,top:'4px'}}>
            button
        </button>

       {/* Sidebar */}

       <div className="sidebar" style={{position:'fixed', top:'0px', left:'0px', height:'100%',width:'200px',
        
       }}>
        i am sidebar
       </div>
    </div>
   
    </>
  )
}

export default Sidebar
