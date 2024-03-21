import { useState } from "react";
function Button() {

    setInterval(changeTime,1000)
    const xTime=new Date().toLocaleTimeString();
    const [time, setTime]=useState(xTime);
  
    function changeTime(){
      const yTime=new Date().toLocaleTimeString();
      setTime(yTime);
    }
    
  
    return (
      <>
        <div>
          <h1>{time}</h1>
          <button onClick={changeTime}>Click Me!</button>
          
        </div>
      </>
    );
  }
  
  export default Button;