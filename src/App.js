import React from 'react'
import {BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/HomePage";
import ContactUs from "./Components/ContactUs/ContactUs";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  return (
      <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
    </Routes> 
    </Router>
  )
}

export default App