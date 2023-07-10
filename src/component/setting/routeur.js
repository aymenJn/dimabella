import React from 'react'
import {Routes, Route,} from "react-router-dom";
import Login from "../login/login"
import Choose from '../choose/choose';
import Follow from '../folllow/follow';
import Addmodel from '../addmodel/addmodel';
import Financial from '../financial/financial';
import Stockage from '../stockage/stockage';
import Final from '../final/final';
const Routeur = () => {
  return (
    <Routes>
    <Route path="/" element={ <Login/> } />
    <Route path="/choose" element={ <Choose/> } />
    <Route path="/follow" element={ <Follow/> } />
    <Route path="/addmodel" element={ <Addmodel/> } />
    <Route path="/financial" element={ <Financial/> } />
    <Route path = "/stockage" element = {<Stockage/>} />
    <Route path = "/final" element = {<Final/>} />
  </Routes>
  )
}

export default Routeur