import React from "react";
// import Cards from "./Components/Cards"
import Header from "./Components/Header";
import Body from "./Components/Body";
// import Sidebar from './Components/Sidebar'

const App = () => {

  function noclicked(){
     document.getElementById('body').style.backgroundImage= "url('https://static.thenounproject.com/png/6593044-512.png')"
    document.getElementById('fool').style.color = "black"
     document.getElementById('fool2').style.color = "black"
       document.getElementById('text2').innerHTML = "FUCK You 🖕 "
     document.getElementById('text2').style.fontSize = "30px"
     document.getElementById('btn2').style.backgroundColor="grey"
     document.getElementById('btn1').style.backgroundColor="#A3D1C6"


  }
  function yesclicked(){
     document.getElementById('body').style.backgroundImage= "url('https://static.thenounproject.com/png/7179972-512.png')"
     document.getElementById('fool').style.color = "yellow"
     document.getElementById('fool2').style.color = "yellow"
     document.getElementById('text2').innerHTML = "Thank you and LOVE you too !!"
     document.getElementById('text2').style.fontSize = "30px"
     document.getElementById('btn1').style.backgroundColor="grey"
     document.getElementById('btn2').style.backgroundColor="#B3D8A8"



    
  }
  
  return (
    <>
      {/* <Cards/> */}
      {/* <Header/> */}
      
      <div id="body" style={{ justifyItems: "center", backgroundColor:"pink", height:"100vh", width:"100vw" , backgroundImage:"url('	https://static.thenounproject.com/png/7134868-512.png')"}}>
        <div
          className="main"
          style={{
            backgroundColor: "#3D8D7A",
            height: "300px",
            width: "400px",
            justifyItems: "center",
            position:"relative",
            top:"100px",
            borderRadius:"10px",
            border:"3px solid brown"
          }}
        >
          <div className="text" style={{ position: "relative", top: "70px" }}>
            <h2 id="text2" style={{color:"white" , fontFamily:"serif" , fontSize:"15px"}}> DRISHTI(madam ji) Will you be my Valentine !!</h2>
          </div>
          <div
            className="btn"
            style={{
              display: "flex",
              gap: "90px",
              position: "relative",
              top: "160px",
            }}
          >
            <button id="btn1"
            onClick={yesclicked}
              style={{
                height: "50px",
                width: "90px",
                border: "none",
                backgroundColor: "#B3D8A8",
                borderRadius: "7px",
                fontWeight: "normal",
                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              YES
            </button>

            <button
            id="btn2"
            onClick={noclicked}
              className="btnno"
              style={{
                height: "50px",
                width: "90px",
                border: "none",
                backgroundColor: "#A3D1C6",
                borderRadius: "7px",
                fontWeight: "normal",
                fontFamily: "cursive",
                fontSize: "20px",
              }}
            >
              NO
            </button>
          </div>
          <div style={{ position: "relative", top: "73px ", right: "161px" }}>
            <div id="fool" style={{ fontSize: "100px", color: "#FBFFE4" }}>❀</div>
          </div>
          <div style={{ position: "relative", top: "-62px ", left: "161px" }}>
            <div id="fool2" style={{ fontSize: "100px", color: "#FBFFE4" }}>❀</div>
          </div>
        </div>

        {/* <Body/> */}
      </div>
    </>
  );
};

export default App;
