import React  , {useState , useEffect,useContext} from 'react'
import * as s from "./follow.style"
import { Link } from 'react-router-dom'
import Exportexcel from '../setting/excel'
import { onSnapshot,query ,collection,updateDoc,doc,deleteDoc} from 'firebase/firestore'
import { db } from '../setting/firebase'
import { Socketcontext } from '../setting/context'
const Follow = () => {

  const [clientdata ,setdata] = useState(false)
  const [clientdata1 ,setdata1] = useState()
  const [changedlist ,setchangedlist] = useState()
  const [jsondata , setjasondata] = useState([])
  const messageref = collection(db,"stock")
  const Changedata  = (data) =>{

   
  setchangedlist(data.name)

  } 
  const Delete= (data) =>{
    const docRef = doc(db, "stock", data.id);

    deleteDoc(docRef)
  }
  const Updatedata  = (datae) =>{
    console.log("test" , datae)
    setchangedlist("")
    let qte = document.getElementById("qte").value
   let pvi = document.getElementById("pvi").value
   let pvm = document.getElementById("pvm").value
   let pvf = document.getElementById("pvf").value
  qte.length === 0 ? qte = datae.data.quantity : qte= qte
  pvi.length === 0 ? pvi = datae.data.pvi : pvi= pvi
  pvm.length === 0 ? pvm = datae.data.pvm : pvm= pvm
  pvf.length === 0 ? pvf = datae.data.pvf : pvf= pvf
   const  data = { data : {name :datae.data.name ,quantity : qte , pvi : pvi  , pvm : pvm , pvf : pvf , loca : datae.data.loca , cout  : datae.data.cout}}

   const messageupdate  = doc(db, "stock" , datae.id);
  updateDoc(messageupdate, data)
    
    }
  useEffect(()=>{
    const querymerssage = query(messageref) 
    onSnapshot(querymerssage , (snapshot)=>{
    let clients = [] ; 
      snapshot.forEach((doc) =>{                                                                                                                                           
        clients.push({
          ...doc.data() ,id : doc.id
        })
    } ,[])
  
    if(clients.length > 0) 
    setdata(true)
    setdata1(clients)

const list = []
    clients.forEach((data)=>{
      const object = { nom : data.data.name,quantity : data.data.quantity,pvm : data.data.pvm , pvi : data.data.pvi,pvf : data.data.pvf}
      var JsonObject = JSON.parse(JSON.stringify(object));
      console.log("test" , JsonObject)

      list.push(JsonObject)
    }) 

    
    setjasondata(list)
   
    })

  },[setdata1])
  return (
    <s.Maincontainer>
      <s.topsection>
      <Link to="/addmodel" >

     
      <s.addmodel>
        ajoute model 
      </s.addmodel>
      </Link>

      <Link to="/financial" >
      <s.financial>
        financial
      </s.financial>
</Link>
<Exportexcel exceldata={jsondata} filename = "excel data" />
      </s.topsection>
     

      <s.datadisplay>

      {clientdata &&  clientdata1.map((data,index)=>{
     
      let test = changedlist !== data.data.name 
    
      
   
        return(
          <s.card>
            {test ? 
            <s.normaldata > 
                <s.title>
            {data.data.name}

            </s.title>
            <s.image src={data.data.dowload} />
            <s.details>
            <s.pvf>
             prix venter final :  {data.data.pvf} {data.data.cout}
            </s.pvf>
            <s.pvf>
             prix venter initial :  {data.data.pvi} {data.data.cout}
            </s.pvf>
            <s.pvf>
             prix venter minimal :  {data.data.pvm} {data.data.cout}
            </s.pvf>
            <s.pvf>
             quantity :  {data.data.quantity}
            </s.pvf>
            <s.pvf>
             cout :  {data.data.cout}
            </s.pvf>
            <s.pvf>
             origine :  {data.data.loca}
            </s.pvf>
            </s.details>
           
          
            <s.changebutton onClick={()=>{Changedata(data.data) } }>
              changer le donner
            </s.changebutton>
            </s.normaldata> 
            : <s.normaldata>
              <div>

             
              qte
                <s.inputnumber type="number" placeholder="qte" id="qte"/>
                </div>
                <div>
                pvi
                <s.inputnumber  type="number" placeholder="pvi" id ="pvi" />
                </div>
                <div>
                pvf
                <s.inputnumber  type="number" placeholder="pvf" id ="pvf" />
                </div>
                <div>
                pvm
                  <s.inputnumber  type="number" placeholder="pvm" id ="pvm" />
                  </div>
                  <s.topsection>
                  <s.img src=' https://www.pngall.com/wp-content/uploads/12/Save-PNG.png' onClick={()=>{Updatedata(data) } }/>
              <s.img src='https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png' onClick={()=>{Delete(data) } }/>
            

                </s.topsection> 
            </s.normaldata>
            
            }
          
          
          </s.card>
        )
      }) }
       </s.datadisplay>
  
    </s.Maincontainer>
  )
}

export default Follow