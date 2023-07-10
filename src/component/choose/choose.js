import React from 'react'
import * as s from "./choose.style"
import { Link } from 'react-router-dom'
const Choose = () => {
  return (
    
    <s.Maincontainer>
      <Link to="/stockage">
        <s.button  >
        المبيعات
        
            </s.button>
            </Link>
            <Link to="/follow">
            <s.button>
            المخزن
            </s.button>
         
            </Link>
          
    </s.Maincontainer>
  )
}

export default Choose