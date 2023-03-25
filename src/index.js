import React from 'react';
import ReactDOM from 'react-dom/client';
import Setting from './component/setting/setting';
import  {Mycontext } from "./component/setting/context"
import {  BrowserRouter as Router  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <Router>
     <Mycontext>
     <Setting />
     </Mycontext>
     </Router>
  
  </React.StrictMode>
);

