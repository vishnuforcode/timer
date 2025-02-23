import React from 'react'
import Container from './Container'

const Body = () => {
  return (
    <>
    <div className="body" style={{border:'2px solid blue', height:'90vh' , marginTop:'5px' , display:'flex', gap:'10px', flexDirection:'row', flexWrap:'wrap'}}>
        <Container/>
        <Container/>
     
    </div>
    </>
  )
}

export default Body
