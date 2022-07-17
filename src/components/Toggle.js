import React, {useState} from "react";

function Toggle() {
  const [currentValue, setValue] = useState(false);
  function handleClick(){
       setValue((currentValue)=>!currentValue);
    
  }
  const color = currentValue ? "red" : "white";

  return <button  style={{ background: color }} onClick={handleClick}>{currentValue? 'ON' : 'OFF'}</button>;
}

export default Toggle;
