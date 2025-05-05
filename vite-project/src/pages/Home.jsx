import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

  const [mode, setMode] = useState("light");

  console.log("mode value:", mode)

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
    }else{
      setMode("light")
    }
  }

  return (
    <div style={ mode === "light" ?  {height: "100vh", width: "100%", backgroundColor: "white"}
    : {height: "100vh", width: "100%", backgroundColor: "black"}}>
      <h1 style={mode === "light" ? {color : "black"} : {color : "white"}}>HomePage</h1>

      <NavLink to="/contact">Go to contact page</NavLink>

      <br />

      <NavLink to="/about">Go to about page</NavLink>

      {/* Dark/Light Mode functionality (button) */}

      <br />

      <button onClick={toggleMode}>Toggle Theme</button>
    </div>


  )
}

export default Home