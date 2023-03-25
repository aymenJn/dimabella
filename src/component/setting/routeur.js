import React from 'react'
import {Routes, Route,} from "react-router-dom";
import Login from "../login/login"
import First from '../Menu/first/first';
const Routeur = () => {
  return (
    <Routes>
    <Route path="/" element={ <Login/> } />
    <Route path="/first" element={ <First/> } />
  </Routes>
  )
}

export default Routeur