// Code Keypad Component Here
import React from "react";

function handleChange (){
  console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
          <input
           type="password"
           placeholder="Enter password"
           onChange ={handleChange}
           name="password"
           />
        </div>
    )
}

export default Keypad;