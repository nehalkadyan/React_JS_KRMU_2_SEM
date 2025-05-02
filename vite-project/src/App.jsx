// import Navbar from "./components/Navbar";
// import Section from "./components/Section";
// import Footer from "./components/Footer";
import "./App.css"  // importing css file
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import { useState } from "react";
// import Count from "./components/Count";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  // const [count, setCount] = useState(0)

  // const handleIncrement = () => {
  //   setCount(count + 1)
  // }

  // const handleDecrement = () => {
  //   setCount(count - 1)
  // }

  // console.log("count : ",count)

  return <div>

    <Router>
      <Routes>
         <Route path = "/" element = {<Home />}/>
      </Routes>
    </Router>

    {/* <button style={{ backgroundColor: "red"}} onClick={handleIncrement}>+</button> */}
    {/* <span className="count">{count}</span> */}
    {/* <button style={{ backgroundColor: "green"}} onClick={handleDecrement}>-</button>

    <Count countVal = {count}/> */}
    {/* <Navbar />
    <Section />
    <Footer /> */}
  </div>;
}

export default App;
