import React ,{useEffect,useContext} from 'react'
import * as s from "./login.style"
import { Socketcontext } from '../setting/context'
import { useNavigate } from 'react-router-dom'
import { onSnapshot,query ,collection} from 'firebase/firestore'
import { db } from '../setting/firebase'
const Login = () => {
  const messageref = collection(db,"stock")
const {setmodellist} = useContext(Socketcontext)
  const navigate = useNavigate();
  useEffect(()=>{
    const querymerssage = query(messageref) 
    onSnapshot(querymerssage , (snapshot)=>{
    let clients = [] ; 
      snapshot.forEach((doc) =>{                                                                                                                                           
        clients.push({
          ...doc.data() ,id : doc.id
        })
    })
  
    if(clients.length > 0) 
  
    setmodellist(clients)

    })

  },[])
  const enrgistre = () =>{

navigate("/choose")


  }

  return(
    <s.Maincontainer>


 <s.box>
  <s.borderline> </s.borderline>
  <s.Form >
  <s.signTitle>مرحبا بيك</s.signTitle>
  <s.inputbox>
    
    <s.inputField  type ="text" required="required" id ="name" />
    <s.username> اسم المستخدم </s.username>
    <s.i></s.i>
     </s.inputbox>
     <s.inputbox>
    
    <s.inputField  type ="password" required id ="tel"  />
    <s.username> كلمة السر </s.username>
    <s.i></s.i>
     </s.inputbox>
   <s.inputsubmit id="button"    type="submit" value="تسجيل " onClick={ ()=>enrgistre()} />   


  </s.Form>



 </s.box>
 </s.Maincontainer>
  )
}

export default Login