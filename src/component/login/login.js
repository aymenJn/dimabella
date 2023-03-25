import React,{useContext} from 'react'
import * as s from "./login.style"
import { Socketcontext } from '../setting/context'
import { Link } from 'react-router-dom'
const Login = () => {
  const {setusername} = useContext(Socketcontext)
  
  const enrgistre = () =>{
const name = document.getElementById("name").value
const tel = document.getElementById("tel").value
const userup = {name : name , tel : tel}
setusername(user => ({
  ...user,
  ...userup
})



)

  }

  return(
    <s.Maincontainer>


 <s.box>
  <s.borderline> </s.borderline>
  <s.Form >
  <s.signTitle>مرحبا بيك</s.signTitle>
  <s.inputbox>
    
    <s.inputField  type ="text" required="required" id ="name" />
    <s.username> Username </s.username>
    <s.i></s.i>
     </s.inputbox>
     <s.inputbox>
    
    <s.inputField  type ="tel" required id ="tel"  pattern="[0-9]{8}" />
    <s.username> telephone </s.username>
    <s.i></s.i>
     </s.inputbox>
   <Link to="/first" ><s.inputsubmit   type="submit" value="تسجيل " onClick={ ()=>enrgistre()} />   </Link> 


  </s.Form>



 </s.box>
 </s.Maincontainer>
  )
}

export default Login