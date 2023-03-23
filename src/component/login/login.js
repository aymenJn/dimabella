import React from 'react'
import * as s from "./login.style"
const Login = () => {
  return (
    <s.Maincontainer>
      <s.LoginTitle>
        مرحبا بيك
      </s.LoginTitle>
      <s.Logincontainer>
         <s.Inputfield  placeholder='الاسم' />
         <s.Inputfield placeholder='رقم الهاتف'type="tel"  pattern="[0-9]{8}" required/>
      </s.Logincontainer>
    </s.Maincontainer>
  )
}

export default Login